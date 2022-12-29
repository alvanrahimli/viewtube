import { ApiDto } from 'viewtube/shared';
import { Ref } from 'vue';
import { useAuthorizationHeader } from '../authorizationHeader';

type UserHistoryParams = {
  limit: number;
  start: number;
  searchTerm: string;
};

export const useGetUserHistory = ({ searchTerm, limit, start }: UserHistoryParams) => {
  const { apiUrl } = useApiUrl();
  const authorizationHeader = useAuthorizationHeader();

  let filterString = '';
  if (searchTerm) {
    filterString = `&filter=${searchTerm}`;
  }

  const url = `${apiUrl}user/history?limit=${limit}&start=${start}${filterString}&sort=DESC`;

  return useLazyFetch<ApiDto<'HistoryResponseDto'>>(url, {
    headers: {
      Authorization: authorizationHeader
    },
    credentials: 'include'
  });
};

export const useGetUserHistoryItem = (videoId: string) => {
  const { apiUrl } = useApiUrl();
  const authorizationHeader = useAuthorizationHeader();

  const url = `${apiUrl}user/history/${videoId}`;

  return useLazyFetch<{
    videoId: string;
    progressSeconds: number;
    lengthSeconds: number;
    lastVisit: Date;
  }>(url, {
    headers: {
      Authorization: authorizationHeader
    },
    credentials: 'include'
  });
};

export const useGetUserProfileDetails = () => {
  const { apiUrl } = useApiUrl();
  const authorizationHeader = useAuthorizationHeader();

  const url = `${apiUrl}user/profile/details`;

  return useLazyFetch<ApiDto<'UserprofileDetailsDto'>>(url, {
    headers: {
      Authorization: authorizationHeader
    },
    credentials: 'include'
  });
};

type UserSubscriptionsParams = {
  limit?: number | Ref<number>;
  currentPage?: number | Ref<number>;
};

export const useGetUserSubscriptions = (
  config: UserSubscriptionsParams = { limit: 20, currentPage: 1 }
) => {
  const { apiUrl } = useApiUrl();
  const authorizationHeader = useAuthorizationHeader();

  const url = computed(() => {
    const limit = unref(config.limit ?? 20);
    const start = (unref(config.currentPage ?? 1) - 1) * limit;
    return `${apiUrl}user/subscriptions/videos?limit=${limit}&start=${start}`;
  });

  return useLazyFetch<ApiDto<'SubscriptionFeedResponseDto'>>(url, {
    headers: {
      Authorization: authorizationHeader
    },
    credentials: 'include'
  });
};

type UserSubscriptionChannelsParams = {
  limit?: number | Ref<number>;
  currentPage?: number | Ref<number>;
  searchTerm: Ref<string> | string;
};

export const useGetUserSubscriptionChannels = (
  config: UserSubscriptionChannelsParams = { limit: 20, currentPage: 1, searchTerm: '' }
) => {
  const { apiUrl } = useApiUrl();
  const authorizationHeader = useAuthorizationHeader();

  const url = computed(() => {
    let filterString = '';
    const searchTerm = unref(config.searchTerm);
    if (searchTerm) {
      filterString = `&filter=${searchTerm}`;
    }

    const limit = unref(config.limit ?? 20);
    const start = (unref(config.currentPage ?? 1) - 1) * limit;
    return `${apiUrl}user/subscriptions/channels?limit=${limit}&start=${start}&sort=author:1${filterString}`;
  });

  return useLazyFetch<ApiDto<'SubscribedChannelsResponseDto'>>(url, {
    headers: {
      Authorization: authorizationHeader
    },
    credentials: 'include'
  });
};