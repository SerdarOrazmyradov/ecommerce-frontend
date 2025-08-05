  import { shallowRef, ref, computed, watchEffect, watch } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import type { ComputedRef } from "vue";
  import { useDebounceFn } from "@vueuse/core";
  export const usePagination = (baseUrl: string) => {
    const route = useRoute();
    const router = useRouter();

    const page = ref<number>(Number(route.query.page) || 1);

    const limit = ref<number>(10);
    const offset: ComputedRef<number> = computed(
      () => limit.value * (page.value - 1)
    );

    const data = shallowRef<any>([]);
    const error = ref<{ message: string }>({ message: "" });
    const loading = ref<boolean>(false);

    const limitOptions = ref<number[]>([10, 20, 50, 100, 200, 250]);

    const fetchPaginatedData = async (baseUrl: string): Promise<any> => {
      loading.value = true;
      try {
        const response: Response = await fetch(baseUrl, { method: "GET" });
        if (response.ok) {
          data.value = await Promise.resolve(response.json());
          loading.value = false;
        } else {
          loading.value = false;
          throw new Error("Unknown response");
        }
      } catch (err) {
        error.value = { message: "Server error" };
        loading.value = false;
      } finally {
        loading.value = false;
      }
    };

    const totalPages: ComputedRef<number> = computed(() => {
      return Math.ceil(data.value.count / limit.value);
    });

    const changePage = (pageNumber: number): void => {
      if (pageNumber >= 1 && pageNumber <= totalPages.value) {
        page.value = pageNumber;
        router.push({
          path: route.path,
          query: {
            ...route.query,
            page: pageNumber,
            limit: limit.value,
          },
        });
      }
    };
    const paginationNumbers: ComputedRef<(string | number)[]> = computed(() => {
      let pageNumbers: Array<number | string> = [];
      if (totalPages.value <= 7) {
        for (let index = 1; index <= totalPages.value; index++) {
          pageNumbers.push(index);
        }
      } else {
        if (page.value <= 4) {
          pageNumbers = [1, 2, 3, 4, 5, "...", totalPages.value];
        } else if (page.value >= totalPages.value - 3) {
          pageNumbers = [
            1,
            "...",
            totalPages.value - 4,
            totalPages.value - 3,
            totalPages.value - 2,
            totalPages.value - 1,
            totalPages.value,
          ];
        } else {
          pageNumbers = [
            1,
            "...",
            page.value - 1,
            page.value,
            page.value + 1,
            "...",
            totalPages.value,
          ];
        }
      }

      return pageNumbers;
    });

    const debounceFetch = useDebounceFn(() => {
      fetchPaginatedData(
        `${baseUrl}?limit=${limit.value}&offset=${offset.value}`
      );
    }, 1000);

    return {
      page,
      limit,
      loading,
      data,
      totalPages,
      paginationNumbers,
      changePage,
      limitOptions,
      debounceFetch
    };
  };
