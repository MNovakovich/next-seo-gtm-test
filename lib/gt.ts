interface BaseEvent {
  event: string;
  [key: string]: unknown;
}

interface PageViewEvent extends BaseEvent {
  page_path: string;
  page_title: string;
}

interface FilterUsed extends BaseEvent {
  filter_used: 'filter_used';
  filter_name: string;
  filter_value: string;
}

interface SharedSocialMediaEvent extends BaseEvent {
  shared_social_media: 'shared_social_media';
  shared_social_media_platform: string;
  shared_social_media_url: string;
}

const dataLayerPush = (data: BaseEvent) => {
  if (window?.dataLayer === undefined) {
    console.warn('GTM dataLayer is not defined');
    return;
  }
  window.dataLayer.push(data);
};

const pageView = (data: Omit<PageViewEvent, 'event' | 'page_view'>) => {
  dataLayerPush({
    event: 'page_view',
    page_path: data.page_path,
    page_title: data.page_title,
  });
};

const filterUsed = (data: Omit<FilterUsed, 'event' | 'filter_used'>) => {
  dataLayerPush({
    event: 'filter_used',
    filter_used: 'filter_used',
    filter_name: data.filter_name,
    filter_value: data.filter_value,
  });
};

const sharedSocialMedia = (
  data: Omit<SharedSocialMediaEvent, 'event' | 'shared_social_media'>
) => {
  dataLayerPush({
    event: 'shared_social_media_name',
    shared_social_media: 'shared_social_media',
    shared_social_media_platform: data.shared_social_media_platform,
    shared_social_media_url: data.shared_social_media_url,
  });
};
const customEvent = (eventName: string, data?: Record<string, unknown>) => {
  dataLayerPush({ event: eventName, ...data });
};

export const gtEvent = {
  pageView,
  filterUsed,
  sharedSocialMedia,
  customEvent,
};
