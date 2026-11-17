import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés pour hôtes Airbnb | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags for Airbnb Hosts | No Minimum | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les hôtes Airbnb. Le détail qui génère des avis cinq étoiles. Aucun minimum, design inclus." : "Custom branded coffee bags for Airbnb hosts. The detail that earns 5-star reviews. No minimum order, full design included.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-airbnb`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-bags-airbnb",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-airbnb",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-bags-airbnb",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-airbnb`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés pour hôtes Airbnb" : "Custom Coffee Bags for Airbnb Hosts" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: IndustryPageData = {
  industry: "Airbnb Hosts",
  eyebrow: "Custom Coffee for Airbnb Hosts",
  headline: "Give your Airbnb guests a morning they will write 5 stars about.",
  subheadline: "Superhosts differentiate through details. A custom branded coffee bag with your property name is the kind of touch that gets mentioned specifically in 5-star reviews.",
  intro: "Airbnb reviews are won and lost on details. The hosts with the highest ratings aren't the ones with the nicest properties — they're the ones who sweat the small things. The handwritten welcome note. The local restaurant recommendations. The specialty coffee on the counter with the host's name on the bag. That last detail costs less than a bouquet of flowers and lasts weeks after checkout. A guest who discovers a custom branded coffee bag in your kitchen doesn't just use it during the stay — they take it home. For the next few weeks, every morning they make coffee, they think of your property. They tell friends about it. They come back. They leave a review that specifically mentions the coffee. That is not hypothetical. Superhosts who have introduced custom branded coffee report seeing it mentioned in review text with surprising frequency. The investment is minimal — EZPZ has no minimum order, so you can order 5 bags for a single property, 20 bags for a multi-unit listing, or 100 bags for an entire portfolio. They ship directly to your property address anywhere in Canada or the USA in 3 to 14 business days.",
  whoOrders: [
    { title: "Urban apartment superhosts", body: "City apartment hosts use branded coffee to stand out in competitive urban markets where every listing looks similar. A small detail like branded specialty coffee can be the deciding factor in a return booking." },
    { title: "Country cottage and cabin hosts", body: "Rural property hosts find that branded coffee complements the artisan, handcrafted aesthetic guests expect from a cottage or cabin stay. It feels local and personal even when the host isn't present." },
    { title: "Luxury villa and premium property hosts", body: "High-end property hosts use branded coffee as part of a premium welcome experience alongside other curated touches. At the luxury tier, branded specialty coffee is expected, not exceptional." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your property name or brand, add a personal welcome message, and choose your packaging style. Takes under 10 minutes and requires no designer." },
    { n: "02", title: "Choose your coffee", body: "Select a crowd-pleasing specialty coffee that works for a range of guest preferences. Medium roast Colombian or Ethiopian are popular choices for Airbnb hosts." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. No minimum — order exactly what you need for your property's bookings." },
    { n: "04", title: "Delivered directly to your property", body: "Shipped to your Airbnb address. Canada: 3–10 business days. USA: 7–14 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "The detail that earns 5-star reviews", body: "Superhosts know that exceptional reviews come from unexpected details. A custom branded coffee bag costs less than a restaurant meal and gets mentioned in reviews more often than any other amenity." },
    { n: "02", title: "A memorable guest experience", body: "Guests who experience a branded coffee welcome remember the property differently. It signals that the host cares — and that care translates directly into glowing written reviews and return bookings." },
    { n: "03", title: "No minimum — order exactly what you need", body: "5 bags for a weekend booking. 20 bags for a summer season. 100 bags for a portfolio of properties. EZPZ's zero minimum means you never waste product or money." },
    { n: "04", title: "Ships directly to the property", body: "Whether you manage your property remotely or in person, EZPZ ships directly to the address. No pickup, no courier run — just branded coffee waiting for your next guests." },
  ],
  testimonial: {
    quote: "Three guests mentioned the coffee bags in their reviews last month. It's a $12 bag and it's generating my best reviews. Best ROI of any hosting investment I've made.",
    author: "Tom K.",
    role: "Superhost, Vancouver",
  },
  canonicalPath: "/custom-coffee-bags-airbnb",
};


const frData: IndustryPageData = {
  industry: "Hôtes Airbnb",
  eyebrow: "Café personnalisé pour les hôtes Airbnb",
  headline: "Le détail qui transforme un séjour ordinaire en avis cinq étoiles.",
  subheadline: "Les avis Airbnb se gagnent et se perdent sur les détails. Les hôtes avec les meilleures notes ne sont pas ceux qui ont les plus belles propriétés, mais ceux qui soignent les petites choses.",
  intro: "Les avis Airbnb se gagnent et se perdent sur les détails. Les hôtes avec les meilleures notes ne sont pas ceux qui ont les plus belles propriétés. Ce sont ceux qui soignent les petites choses : le mot de bienvenue manuscrit, les recommandations de restaurants locaux, le café de spécialité sur le comptoir avec le nom de l'hôte et un message d'accueil. Ce dernier détail coûte environ 12 dollars et il est mentionné dans les avis Airbnb plus souvent que le lit, la cuisine équipée et la vue. Les superhôtes savent qu'un avis exceptionnel nécessite un moment inattendu. Un sachet de café personnalisé est ce moment. Il dit aux clients que cet hôte a pensé à eux spécifiquement, a créé quelque chose juste pour leur séjour.",
  whoOrders: [
    { title: "Superhôtes d'appartements urbains", body: "Les hôtes d'appartements citadins utilisent le café de marque pour se démarquer dans des marchés urbains compétitifs où toutes les annonces se ressemblent. Un petit détail comme le café de spécialité personnalisé peut être décisif pour obtenir un rebooking." },
    { title: "Hôtes de chalets et de cabanes rurales", body: "Les hôtes de propriétés rurales utilisent le café de marque pour compléter l'expérience chalet de leurs clients, qui arrivent souvent le soir et préparent du café frais le matin." },
    { title: "Propriétaires de gîtes touristiques et de B&B", body: "Les B&B et les gîtes touristiques utilisent le café de marque comme extension naturelle de leur marque d'hospitalité locale, renforçant l'authenticité de l'expérience." },
  ],
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo et vos couleurs de marque. Notre outil en ligne crée un sachet professionnel qui correspond à vos standards de marque sans designer ni fichiers prêts à imprimer." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos origines de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus. Nous vous aidons à choisir si nécessaire." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à votre propriété", body: "Livré directement à l'adresse de votre propriété Airbnb. Canada : 3 à 10 jours ouvrables. États-Unis : 7 à 14 jours ouvrables." },
  ],
  benefits: [
    { n: "01", title: "Le détail qui génère des avis cinq étoiles", body: "Les superhôtes savent que les avis exceptionnels viennent de détails inattendus. Un sachet de café de marque coûte moins qu'un repas au restaurant et est mentionné dans les avis plus souvent que n'importe quelle autre aménité." },
    { n: "02", title: "Une expérience client mémorable et photographiée", body: "Les clients photographient les détails inhabituels et les partagent sur les réseaux sociaux. Un beau sachet de café personnalisé avec le nom de votre propriété génère une portée organique que vous ne pouvez pas acheter." },
    { n: "03", title: "Fidélité et rebooking direct", body: "Les clients qui ont eu une expérience mémorable rebookent directement avec vous. Le café personnalisé est une partie de ce que rend un séjour mémorable et différent d'un hôtel générique." },
    { n: "04", title: "Faible coût, fort impact sur la note globale", body: "Un investissement de 12 dollars par séjour génère un retour mesurable en avis cinq étoiles, en mentions de détails soignés et en rebookings. C'est le meilleur retour sur investissement dans vos aménités d'hôte." },
  ],
  testimonial: {
    quote: "Trois clients ont mentionné les sacs de café dans leurs avis le mois dernier. C'est un sachet à 12 dollars et ça génère mes meilleurs avis. Meilleur retour sur investissement de tous mes achats d'hôte.",
    author: "Amélie G.",
    role: "Superhôte Airbnb, Québec",
  },
  canonicalPath: "/custom-coffee-bags-airbnb",
};

const AirbnbPage = () => <IndustryPage data={data} frData={frData} />;
export default AirbnbPage;
