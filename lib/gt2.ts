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

class GTMTracker {
  private static instance: GTMTracker;

  private constructor() {}

  static getInstance(): GTMTracker {
    if (!GTMTracker.instance) {
      GTMTracker.instance = new GTMTracker();
    }
    return GTMTracker.instance;
  }

  private push<T extends BaseEvent>(data: T): void {
    if (window?.dataLayer === undefined) {
      console.warn('GTM dataLayer is not defined');
      return;
    }
    window.dataLayer.push(data);
  }

  pageView(pagePath: string, pageTitle: string): void {
    this.push<PageViewEvent>({
      event: 'page_view',
      page_path: pagePath,
      page_title: pageTitle,
    });
  }

  filterUsed(filterName: string, filterValue: string): void {
    this.push<FilterUsed>({
      event: 'filter_used',
      filter_used: 'filter_used',
      filter_name: filterName,
      filter_value: filterValue,
    });
  }

  sharedSocialMedia(platform: string, url: string): void {
    this.push<SharedSocialMediaEvent>({
      event: 'shared_social_media',
      shared_social_media: 'shared_social_media',
      shared_social_media_platform: platform,
      shared_social_media_url: url,
    });
  }

  custom(eventName: string, data?: Record<string, unknown>): void {
    this.push({ event: eventName, ...data });
  }
}

export const gtEvent2 = GTMTracker.getInstance();

