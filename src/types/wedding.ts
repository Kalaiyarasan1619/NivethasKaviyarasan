export interface VenueDetail {
  name: string;
  nameEnglish?: string;
  eventType: string;
  eventTypeEnglish: string;
  dateTamil: string;
  dateEnglish: string;
  timeTamil: string;
  timeEnglish: string;
  address: string;
  city?: string;
  landmark?: string;
  mapUrl: string;
  image?: string;
}

export interface WeddingData {
  initials: string;
  displayOrder?: 'brideFirst' | 'groomFirst';
  deityTamil?: string;
  deityEnglish?: string;
  thirukkural?: string;
  blessingEnglish: string;
  blessingTamil: string;
  
  // Bride Details
  brideTamil: string;
  brideEnglish: string;
  brideDegree?: string;
  brideProfession?: string;
  brideParents: string;
  brideBrother?: string;
  brideAncestry?: string;

  // Groom Details
  groomTamil: string;
  groomEnglish: string;
  groomDegree?: string;
  groomProfession?: string;
  groomParents: string;
  groomAncestry?: string;

  // Invitation Message & Dates
  invitationNoteLine1: string;
  invitationNoteLine2: string;
  weddingDateDisplay: string;
  weddingDateIso: string; // For countdown, e.g. "2026-12-14T09:00:00"
  muhurthamTimeTamil?: string;
  muhurthamTimeEnglish?: string;
  astrologyTamil?: string;
  buttonText: string;
  buttonSubtext: string;
  
  // Marriage (Muhurtham) Venue
  marriageVenue: VenueDetail;

  // Reception Venue (from Reception Card)
  receptionVenue: VenueDetail;

  contacts: {
    name: string;
    role: string;
    phone: string;
  }[];

  events?: {
    id: string;
    titleTamil: string;
    titleEnglish: string;
    dateTamil: string;
    dateEnglish: string;
    timeTamil: string;
    timeEnglish: string;
    description: string;
    icon: string;
  }[];
}

export interface WishMessage {
  id: string;
  name: string;
  message: string;
  createdAt: string;
  relation?: string;
}
