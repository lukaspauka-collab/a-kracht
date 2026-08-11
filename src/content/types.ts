export interface Img {
  src: string;
  placeholder: string;
}

export interface IconCard {
  sw: string;
  title: string;
  text: string;
}

export interface NumCard {
  n: string;
  title: string;
  text: string;
}

export interface DayRow {
  time: string;
  strong: string;
  text: string;
}

export interface StatRow {
  value: string;
  label: string;
}

export interface FaqRow {
  q: string;
  a: string;
}

export interface ContactInfoRow {
  sw: string;
  color: string;
  glyph: string;
  label: string;
  value: string;
  href: string;
}

export interface TimelineRow {
  year: string;
  strong: string;
  text: string;
  accent?: boolean;
}

export interface BorderCard {
  border: string;
  title: string;
  text: string;
}

export interface EducationRow {
  label: string;
  meta: string;
}

export interface Commission {
  sw: string;
  title: string;
  text: string;
  list: string[];
}

export interface StepRow {
  n: string;
  title: string;
  text: string;
}

export interface ServiceRow {
  sw: string;
  title: string;
  text: string;
}

export interface FundingRow {
  title: string;
  text: string;
}

export interface SiteContent {
  site: {
    name: string;
    url: string;
    description: string;
    email: string;
    phone: string;
    phoneDisplay: string;
    locality: string;
    region: string;
    country: string;
    parentOrganization: string;
    copyrightYear: string;
    footerTagline: string;
    headerCta: string;
    nav: { label: string; href: string }[];
  };
  home: {
    heroEyebrow: string;
    /** Multi-line title; wrap a segment in **double asterisks** to highlight it (sage underline). */
    heroTitle: string;
    heroLead: string;
    heroCtaPrimary: string;
    heroCtaPrimaryHref: string;
    heroCtaSecondary: string;
    heroCtaSecondaryHref: string;
    heroImage: Img;
    stats: StatRow[];
    quoteText: string;
    quoteAuthor: string;
    coreEyebrow: string;
    coreTitle: string;
    core: IconCard[];
    offerEyebrow: string;
    offerTitle: string;
    offerLinkLabel: string;
    offer: NumCard[];
    dayEyebrow: string;
    dayTitle: string;
    dayIntro: string;
    day: DayRow[];
    galleryMain: Img;
    gallerySide1: Img;
    gallerySide2: Img;
    galleryCaption: string;
    audienceTitle: string;
    audienceLead: string;
    audienceYesTitle: string;
    audienceYes: string[];
    audienceNoTitle: string;
    audienceNo: string[];
    deltaTitle: string;
    deltaText: string;
    deltaCta: string;
  };
  over: {
    eyebrow: string;
    name: string;
    quote: string;
    linkedinHref: string;
    linkedinLabel: string;
    portrait: Img;
    intro1: string;
    intro2: string;
    intro3: string;
    timelineTitle: string;
    timeline: TimelineRow[];
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
    focusTitle: string;
    focusLead: string;
    focus: NumCard[];
    methodTitle: string;
    methodLead: string;
    method: NumCard[];
    educationTitle: string;
    education: EducationRow[];
    practiceTitle: string;
    practice: BorderCard[];
  };
  diensten: {
    eyebrow: string;
    title: string;
    lead: string;
    services: ServiceRow[];
    explainEyebrow: string;
    explainTitle: string;
    explainP1: string;
    explainP2: string;
    stepsTitle: string;
    stepsLead: string;
    steps: StepRow[];
    fundingEyebrow: string;
    fundingTitle: string;
    fundingLead: string;
    funding: FundingRow[];
    ctaTitle: string;
    ctaLabel: string;
    ctaHref: string;
  };
  organisatie: {
    eyebrow: string;
    title: string;
    lead: string;
    whoEyebrow: string;
    whoTitle: string;
    whoP1: string;
    whoP2: string;
    whoLinkLabel: string;
    whoLinkHref: string;
    dataEyebrow: string;
    dataTitle: string;
    dataLead: string;
    dataRows: { label: string; value: string }[];
    offerEyebrow: string;
    offerTitle: string;
    offerLinkLabel: string;
    offer: BorderCard[];
    qualityEyebrow: string;
    qualityTitle: string;
    qualityLead: string;
    quality: NumCard[];
    complaintEyebrow: string;
    complaintTitle: string;
    complaintP1: string;
    complaintP2: string;
    complaintCtaLabel: string;
    complaintCtaHref: string;
    applyTitle: string;
    applyText: string;
    applyCtaLabel: string;
    applyCtaHref: string;
    applyCta2Label: string;
    applyCta2Href: string;
    councilEyebrow: string;
    councilTitle: string;
    councilP1: string;
    councilP2: string;
    councilP3: string;
    councilTasksTitle: string;
    councilTasks: string[];
    councilNote: string;
    commissionsTitle: string;
    commissionsLead: string;
    commissions: Commission[];
    privacyEyebrow: string;
    privacyTitle: string;
    privacyP1: string;
    privacyLinkLabel: string;
    privacyLinkHref: string;
    privacyP2: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    formNameLabel: string;
    formEmailLabel: string;
    formPhoneLabel: string;
    formPhoneOptional: string;
    formMessageLabel: string;
    formSubmit: string;
    formSuccess: string;
    infoTitle: string;
    infoRows: ContactInfoRow[];
    streetImage: Img;
    deltaBadgeGlyph: string;
    deltaTitle: string;
    deltaText: string;
    faqEyebrow: string;
    faqTitle: string;
    faqLead: string;
    faq: FaqRow[];
  };
}
