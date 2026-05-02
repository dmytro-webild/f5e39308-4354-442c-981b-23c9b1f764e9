"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSizeMediumTitles"
        background="aurora"
        cardStyle="subtle-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "O nama",          id: "about"},
        {
          name: "Naš tim",          id: "team"},
        {
          name: "Recenzije",          id: "testimonials"},
        {
          name: "Kontakt",          id: "contact"},
      ]}
      brandName="Barbarossa"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{
        variant: "gradient-bars"}}
      title="Barbarossa Tattoo Studio Rijeka"
      description="Najbolje ocijenjeni tattoo studio u Rijeci. Vrhunska kvaliteta, potpuna sterilnost i artistička vizija koja se vraća."
      testimonials={[
        {
          name: "Ana Marković",          handle: "@anamarkovic",          testimonial: "Najbolji studio u Rijeci! Jako precizan rad i profesionalna atmosfera.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-tattooed-person_23-2149563235.jpg"},
        {
          name: "Ivan Horvat",          handle: "@ivan_tattoo",          testimonial: "Dugogodišnji sam klijent i uvijek se vraćam. Vrhunska izvedba.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-redhead-bearded-male-with-tattoos-arms-dressed-military-jacket-wall-brick_613910-3647.jpg"},
        {
          name: "Maja Petrović",          handle: "@majatattoo",          testimonial: "Komunikacija je bila odlična od samog početka. Preporuka svima!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-cheerful-young-beautiful-tattooed-girl-smiling-posing-looking-down_176420-9471.jpg"},
        {
          name: "Dino Krnić",          handle: "@dino_k",          testimonial: "Savršeno odrađen projekt, jako sam zadovoljan pristupom.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-hippie-man-red-bandana-with-bare-torso-rolls-tobacco-cigarette-cafe-bali_1321-4115.jpg"},
        {
          name: "Petra Vukić",          handle: "@petrav",          testimonial: "Profesionalnost na visokom nivou, hvala ekipi Barbarossa!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/experienced-tattoo-artist-working-client-tattoo_23-2149479238.jpg"},
      ]}
      buttons={[
        {
          text: "Rezerviraj termin",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/deep-blue-oil-paint-textured-background_53876-101708.jpg"
      imageAlt="Barbarossa Tattoo Artist at work"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/middle-age-greyhaired-woman-drinking-coffee-sitting-sofa-home-sticking-tongue-out-happy-with-funny-expression-emotion-concept_839833-20319.jpg",          alt: "Klijent 1"},
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-asian-woman-witch-costume-looking-through-finger-glasses-smiling-happy-standing-white-background_1258-114914.jpg",          alt: "Klijent 2"},
        {
          src: "http://img.b2bpic.net/free-photo/smiley-authentic-woman-posing-medium-shot_23-2149419291.jpg",          alt: "Klijent 3"},
        {
          src: "http://img.b2bpic.net/free-photo/stylish-bearded-male-with-tattooed-arms-dressed-shirt-posing-grey-background_613910-2010.jpg",          alt: "Klijent 4"},
        {
          src: "http://img.b2bpic.net/free-photo/man-enjoying-holi-with-colored-t-shirt_23-2148337984.jpg",          alt: "Klijent 5"},
      ]}
      marqueeItems={[
        {
          type: "text",          text: "Sterilno"},
        {
          type: "text",          text: "Kreativno"},
        {
          type: "text",          text: "Precizno"},
        {
          type: "text",          text: "Unikatno"},
        {
          type: "text",          text: "Profesionalno"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Umjetnost koja ostaje"
      description="Barbarossa Tattoo Studio je mjesto gdje se vaša ideja pretvara u trajnu umjetnost. S godinama iskustva i beskompromisnim standardima, osiguravamo da svaki klijent dobije upravo ono što je zamislio."
      bulletPoints={[
        {
          title: "Stručnost",          description: "Naši artisti su specijalizirani za razne stilove tetoviranja."},
        {
          title: "Higijena",          description: "Najviši standardi sterilnosti i sigurnosti za svakog klijenta."},
        {
          title: "Konzistentnost",          description: "Kvaliteta koju jamčimo pri svakoj tetovaži, od malih motiva do velikih projekata."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/tattooed-unrecognizable-man-closes-paper-tray-home-printer-scanner-multi-device-isolated-white_346278-1825.jpg"
      imageAlt="Pogled u studio"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "1",          title: "Individualni pristup",          subtitle: "Svaka tetovaža je unikatna",          category: "Komunikacija",          value: "100%"},
        {
          id: "2",          title: "Higijenski standardi",          subtitle: "Strogo kontrolirani uvjeti",          category: "Sigurnost",          value: "A+"},
        {
          id: "3",          title: "Iskustvo",          subtitle: "Dugogodišnji rad s klijentima",          category: "Kvaliteta",          value: "5.0"},
      ]}
      title="Zašto odabrati nas?"
      description="Profesionalizam, umjetnički pristup i povjerenje klijenata su naši temelji."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      members={[
        {
          id: "m1",          name: "Giuseppeom ",          role: "",          imageSrc: "http://img.b2bpic.net/free-photo/young-tattooer-dreamily-looking-camera-spending-time-modern-tattoo-studio_574295-673.jpg"},
        {
          id: "m2",          name: "Iva ",          role: "",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D8el9a4JwbvdbDnMQkhaXtGvO6/uploaded-1777669511508-wv53m42m.png"},
        {
          id: "m3",          name: "Adam ",          role: "",          imageSrc: "http://img.b2bpic.net/free-photo/young-bearded-tattooed-man-cafe-street-with-glass-wine-romantic-guy-white-cap-suspenders-city-peaky-blinders-old-fashionable-retro_1321-2027.jpg"},
      ]}
      title="Upoznajte naše artiste"
      description="Ekipa koja stvara vašu trajnu umjetnost."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Ivan Horvat",          role: "Dizajner",          testimonial: "Vrhunska preciznost i vibe. Dolazim opet!",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-cheerful-young-redhead-european-woman-with-braid-dressed-stylish-clothes_273609-9486.jpg"},
        {
          id: "2",          name: "Maja Petrović",          role: "Student",          testimonial: "Najljepša tetovaža koju imam, super pristup.",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-elegant-asian-woman-gothic-lace-dress-celebrating-halloween-dressup-as-witch-sendin_1258-114511.jpg"},
        {
          id: "3",          name: "Dino Krnić",          role: "Programer",          testimonial: "Studio je broj 1 u Rijeci bez dileme.",          imageSrc: "http://img.b2bpic.net/free-photo/stylish-man-shirt-holding-phone-looking-sideways-while-receiving-manicure-by-beautician-beauty-salon_613910-20897.jpg"},
        {
          id: "4",          name: "Petra Vukić",          role: "Medicinska sestra",          testimonial: "Hvala na strpljenju i savršenom radu.",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-tattooed-person_23-2149563307.jpg"},
        {
          id: "5",          name: "Tomislav J.",          role: "Poduzetnik",          testimonial: "Dugo sam tražio pravog majstora, našao ga ovdje.",          imageSrc: "http://img.b2bpic.net/free-photo/handsome-stylish-bearded-male-with-tattoo-arm-dressed-flannel-shirt-holding-juice-while-getting-haircut_613910-5727.jpg"},
      ]}
      title="Što klijenti kažu"
      description="Ponosni smo na ocjenu 5.0 i povjerenje naših klijenata."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "Kako rezervirati termin?",          content: "Javite nam se preko Instagrama ili telefona za dogovor."},
        {
          id: "f2",          title: "Koja je cijena tetovaže?",          content: "Cijena ovisi o veličini, detaljima i stilu tetovaže."},
        {
          id: "f3",          title: "Kako se pripremiti za tetoviranje?",          content: "Dođite odmorni, siti i hidratizirani."},
      ]}
      sideTitle="Česta pitanja"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Kontaktiraj nas"
      title="Dogovorite svoje savjetovanje"
      description="Spremni za novu tetovažu? Rezervirajte termin kod najboljih u Rijeci."
      buttons={[
        {
          text: "Pošalji upit",          href: "mailto:barbarossa@studio.hr"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Barbarossa Tattoo Studio"
      columns={[
        {
          title: "Navigacija",          items: [
            {
              label: "Početna",              href: "#"},
            {
              label: "O nama",              href: "#about"},
          ],
        },
        {
          title: "Poveznice",          items: [
            {
              label: "Instagram",              href: "#"},
            {
              label: "Facebook",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2025 Barbarossa Tattoo Studio | Rijeka"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
