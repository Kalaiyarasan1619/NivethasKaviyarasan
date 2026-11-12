import type { WeddingData } from '../types/wedding';

// Primary Default: Selvi. R. Nivetha & Selvan. G. Kaviyarasan
// Complete with both Marriage Venue (Orathanadu) & Reception Venue (Urapakkam)
export const defaultWeddingData: WeddingData = {
  initials: "N ♥ K",
  displayOrder: 'brideFirst',
  deityTamil: "ஸ்ரீ நார்த்தாமலை முத்து மாரியம்மன் துணை • ஸ்ரீ மகா முத்து மாரியம்மன் துணை",
  deityEnglish: "Sree Narthamalai Muthu Mariamman Thunai & Sree Maha Muthu Mariamman Thunai",
  thirukkural: "அன்பும் அறனும் உடைத்தாயின் இல்வாழ்க்கை பண்பும் பயனும் அது",
  blessingEnglish: "WITH THE BLESSINGS OF OUR FAMILIES",
  blessingTamil: "இறைவன் அருளுடனும், பெரியோர்களின் ஆசியுடனும்",
  
  // Bride Details
  brideTamil: "R. நிவேதா",
  brideEnglish: "R. NIVETHA",
  brideDegree: "B.Sc.,",
  brideProfession: "Software Engineer, Atandra Energy Pvt. Ltd. Chennai",
  brideParents: "திரு. M. ரவிச்சந்திரன் வாண்டையார் & திருமதி. R. விஜயகுமாரி",
  brideBrother: "செல்வன். R. மோகனசுந்தரம் B.E. (Buyer Procurement Flex, Chennai)",
  brideAncestry: "ஊரப்பாக்கம், சென்னை (திருக்கண்ணங்குடி & கொரடாச்சேரி வழிவந்த)",

  // Groom Details
  groomTamil: "G. கவியரசன்",
  groomEnglish: "G. KAVIYARASAN",
  groomDegree: "B.E.,",
  groomProfession: "Senior Engineer, Tata Electronics Product and Solution Pvt. Ltd. Chennai",
  groomParents: "திரு. G. குணசேகரன் வன்னியர் & திருமதி. G. கருணாராணி",
  groomAncestry: "மூவாநல்லூர் மேலத்தெரு, மன்னார்குடி வட்டம், திருவாரூர் மாவட்டம்",

  // Dates & Notes
  invitationNoteLine1: "எங்கள் வாழ்வின் இனிய தொடக்கத்தில் தாங்கள் தங்கள்",
  invitationNoteLine2: "சுற்றமும் நட்பும் சூழ வருகை தந்து மணமக்களை வாழ்த்திடுமாறு அன்புடன் அழைக்கின்றோம்.",
  weddingDateDisplay: "14 DECEMBER 2026",
  weddingDateIso: "2026-12-14T09:00:00",
  muhurthamTimeTamil: "காலை 9.00 மணிக்குமேல் 10.30 மணிக்குள் (மகர லக்கினத்தில்)",
  muhurthamTimeEnglish: "from 9.00 am to 10.30 am (Makara Lagnam)",
  astrologyTamil: "பராபவ வருடம் கார்த்திகை 28 (14.12.2026), திங்கட்கிழமை, பஞ்சமி திதி, அவிட்ட நட்சத்திரம்",
  buttonText: "அழைப்பிதழ் திறக்கப்பட்டது ✓",
  buttonSubtext: "OPEN OUR INVITATION",
  
  // 1. Marriage Venue (From Marriage Card)
  marriageVenue: {
    name: "A.M.R.K. திருமண மண்டபம்",
    nameEnglish: "A.M.R.K. WEDDING HALL",
    eventType: "திருமண முகூர்த்தம்",
    eventTypeEnglish: "Auspicious Muhurtham",
    dateTamil: "14 டிசம்பர் 2026, திங்கட்கிழமை",
    dateEnglish: "Monday, 14th December 2026",
    timeTamil: "காலை 9.00 மணிக்குமேல் 10.30 மணிக்குள் (மகர லக்கினத்தில்)",
    timeEnglish: "from 9.00 am to 10.30 am",
    address: "காவாராப்பட்டு, ஒரத்தநாடு",
    city: "தஞ்சாவூர் மாவட்டம் (Thanjavur Dist)",
    landmark: "ஒரத்தநாடு - காவாராப்பட்டு",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=A.M.R.K.+Wedding+Hall+Kavarapattu+Orathanadu"
  },

  // 2. Reception Venue (From Reception Card)
  receptionVenue: {
    name: "PRN திருமண மண்டபம்",
    nameEnglish: "PRN Thirumana Mandapam",
    eventType: "வரவேற்பு நிகழ்ச்சி",
    eventTypeEnglish: "Wedding Reception",
    dateTamil: "20 டிசம்பர் 2026, ஞாயிற்றுக்கிழமை",
    dateEnglish: "Sunday, 20th December 2026",
    timeTamil: "மாலை 6.00 மணி முதல்",
    timeEnglish: "6.00 PM Onwards",
    address: "Plot No. 17, Kulasekaran Avenue, Erikarai Street / Railway Station Road, Urapakkam",
    city: "Chengalpattu - 603210, Tamil Nadu",
    landmark: "Near Urapakkam Railway Station (ஊரப்பாக்கம் இரயில் நிலையம் அருகில்)",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Prn+Thirumana+Mandapam+Urapakkam"
  },

  contacts: [
    { name: "M. ரவிச்சந்திரன் வாண்டையார் (மணமகள் தந்தை)", role: "ஊரப்பாக்கம், சென்னை", phone: "+91 94440 12345" },
    { name: "G. குணசேகரன் வன்னியர் (மணமகன் தந்தை)", role: "மூவாநல்லூர், மன்னார்குடி", phone: "+91 94430 67890" },
    { name: "R. மோகனசுந்தரம் B.E. (மணமகள் சகோதரர்)", role: "Buyer Procurement Flex, Chennai", phone: "+91 98840 54321" }
  ]
};

// Preset with Groom First
export const kaviyarasanNivethaPreset: WeddingData = {
  ...defaultWeddingData,
  initials: "K ♥ N",
  displayOrder: 'groomFirst',
};

// Preset with Initials
export const nivethaKaviyarasanWithInitials: WeddingData = {
  ...defaultWeddingData,
  initials: "N ♥ K",
  displayOrder: 'brideFirst',
};
