"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import courseReport from "@/assets/reviewIcons/courseReport.svg";
import careerKarma from "@/assets/reviewIcons/careerKarma.svg";
import trustpilot from "@/assets/reviewIcons/trustpilot.svg";
import switchup from "@/assets/reviewIcons/switchup.svg";
import glassdoor from "@/assets/reviewIcons/glassdoor.svg";
import ScribbleUnderline from "../ui/ScribbleUnderline";

interface Review {
  quote: string;
  name: string;
}

interface Rating {
  logo: string;
  alt: string;
  score: string;
  count: string;
  reviewList: Review[];
}

const MAX_VISIBLE_REVIEWS = 5;

function getVisibleReviews(reviews: Review[]) {
  return reviews.slice(0, MAX_VISIBLE_REVIEWS);
}

function getRandomReviews(reviews: Review[]) {
  return [...reviews]
    .sort(() => Math.random() - 0.5)
    .slice(0, MAX_VISIBLE_REVIEWS);
}

const topRatings: Rating[] = [
  {
    logo: courseReport,
    alt: "CourseReport",
    score: "4.9",
    count: "172 reviews",
    reviewList: [
      {
        quote:
          "The modules and lessons are made in a way that make it very digestible and easy to follow along.",
        name: "Stephanie Ruiz",
      },
      {
        quote:
          "FES Institute has been nothing but helpful towards my CS journey. I've learned so much about Frontend Development.",
        name: "Tam Nguyen",
      },
      {
        quote:
          "The curriculum is well organized, and the frontend implementation expectations are clear from the start.",
        name: "Timothy Fowler",
      },
      {
        quote:
          "The 24/7 access to mentors is amazing and you can either chat or video conference them by setting up a call.",
        name: "Robert Sakal",
      },
      {
        quote:
          "I had absolutely no coding knowledge prior to starting this program. I have learned so much these last few months.",
        name: "Justin Althouse",
      },
      {
        quote:
          "The crew has been very patient and helpful with me, even though I am not a natural student in this industry.",
        name: "Noah Price",
      },
      {
        quote:
          "The mentors answer every question in a way that makes it seem so simple. I get an answer anytime I need one.",
        name: "Boricua Morales",
      },
      {
        quote:
          "I've received prompt support with 24/7 access to mentors. I can't say enough good things about this program.",
        name: "Jacob Maynard",
      },
      {
        quote:
          "As a busy mom, being able to learn on my own schedule made a huge difference. The program also pushes you to actually build projects.",
        name: "Vanessa Diaz",
      },
      {
        quote:
          "The self-paced approach allows me the flexibility to learn and study when I have free time.",
        name: "Steven Frasica",
      },
      {
        quote:
          "This bootcamp offers awesome support with around the clock mentors available all day.",
        name: "Saul Diaz",
      },
      {
        quote:
          "I have received a lot of support from mentors and other students going through the same modules as myself.",
        name: "Christopher Reding",
      },
      {
        quote:
          "Frontend Simplified is a great way to familiarize yourself with frontend development, not only with HTML, CSS, and JavaScript, but also with React and Node.",
        name: "Cole",
      },
      {
        quote:
          "The mentors are very quick to respond to questions and help where needed and communicate well.",
        name: "Shelby Nord",
      },
      {
        quote:
          "The mentorship, structure, and career support have been really encouraging.",
        name: "Katia Van Buskirk",
      },
      {
        quote:
          "Having someone to contact any time of day any day of the week is super helpful.",
        name: "Ethan Lunt",
      },
      {
        quote:
          "There is a lot of support, and the mentors help every time super-fast.",
        name: "Michael",
      },
      {
        quote:
          "Very thorough lessons on the different coding languages and a big emphasis on using the best coding practices.",
        name: "Johnathan Rosales",
      },
      {
        quote: "FES is solid, up to date and offers an amazing support system.",
        name: "Melody Barfield",
      },
    ],
  },
  {
    logo: careerKarma,
    alt: "Career Karma",
    score: "4.7",
    count: "32 reviews",
    reviewList: [
      {
        quote:
          "Frontend Simplified is beginner friendly, and also very efficient. The mentors are there for you when you need them.",
        name: "Mathew Ybarra",
      },
      {
        quote:
          "I love the way this program is setup. The curriculum is taught in a very beginner friendly way.",
        name: "Sadie Jurak",
      },
      {
        quote:
          "The website is very simple to navigate, offering not only video but text explanations to help understand the material.",
        name: "Cameron Davis",
      },
      {
        quote:
          "The projects work on increasing your skills in all areas of frontend development and give you the skills you need to start your new career.",
        name: "Sandra Lane",
      },
      {
        quote:
          "The course work has been great. The mentors are amazing and I can't thank them enough for their hard work.",
        name: "Jordan Benson",
      },
      {
        quote:
          "They have a great program outlined, and I look forward to completing it and working ASAP.",
        name: "Barbara Yazzie",
      },
      {
        quote:
          "This experience has been nothing short of being grateful. They offer 24/7 help and actual helpful projects.",
        name: "Deletedxlqyvr2e",
      },
      {
        quote:
          "This bootcamp uses hands-on course work and real world examples to teach the basics, so it's easy to learn and fun while doing so.",
        name: "Misty Wynn",
      },
      {
        quote:
          "Frontend Simplified is an amazing course that makes learning frontend development clear and approachable.",
        name: "Kadar Muridi",
      },
      {
        quote:
          "All my questions get answered super fast. Recently at 11 p.m. I got stuck and immediately a mentor was available.",
        name: "Xavia Christopher",
      },
      {
        quote:
          "The course videos break down concepts step by step, which makes it much easier to understand even when topics get technical.",
        name: "Lavelle Ali",
      },
      {
        quote:
          "The program was well-structured, combining clear theoretical explanations with hands-on projects that made learning practical.",
        name: "Santiago Reyes",
      },
      {
        quote:
          "I started frontend looking forward to this journey. Easy process, clear courses, great mentors.",
        name: "John Bass",
      },
      {
        quote:
          "The mentors in this coding academy are next level. Truly exceptional support structure here.",
        name: "Chandler Urenda",
      },
      {
        quote:
          "Mentors are always available in real time. All of the work is hands-on and you build at your own pace.",
        name: "Monique Bynoe",
      },
      {
        quote:
          "There are tons of resources to help if you get stuck, and they are amazing about helping as quickly as possible.",
        name: "Aaron Marsh",
      },
      {
        quote:
          "Frontend Simplified has an easy user-friendly platform that builds the skills you need with 24/7 support every step of the way.",
        name: "Amana Johnson",
      },
      {
        quote:
          "They have easy to understand curriculum, especially if you're a complete beginner like me.",
        name: "Roxanne Apfel",
      },
      {
        quote:
          "The encouragement given to students is incredible. FES Institute makes it simplified.",
        name: "Riz Wan",
      },
      {
        quote:
          "What stands out the most is the authenticity and genuineness of the tutors and support team.",
        name: "Radi Hamoudeh",
      },
      {
        quote:
          "The mentors are incredibly helpful and always there when you get stuck. I'm really enjoying the way the program is structured.",
        name: "Kenneth Carman",
      },
      {
        quote:
          "The platform allows for the learn, see, do method, which boosts confidence and provides immediate results.",
        name: "Carlos Reyes",
      },
      {
        quote:
          "The program is laid out very well in that each module builds on the one before it.",
        name: "Scott Slagle",
      },
    ],
  },
  {
    logo: trustpilot,
    alt: "Trustpilot",
    score: "4.8",
    count: "418 reviews",
    reviewList: [
      {
        quote:
          "It really walks you through the steps, and they have dedicated staff that will help, guide, and assist you any hour of the day.",
        name: "Moises Ramirez",
      },
      {
        quote: "Great service.",
        name: "Breanna Watson",
      },
      {
        quote:
          "Knowing there's a helping hand just one click away is a big plus.",
        name: "Kelly Massie",
      },
      {
        quote:
          "Ray was more than helpful and taught me everything I had questions about.",
        name: "Solomon Albright",
      },
      {
        quote:
          "The classes are self-paced and very interactive. Mentors are very responsive and engaged.",
        name: "Kimberly Washington",
      },
      {
        quote:
          "The team was very helpful showing me what was wrong and answering my question.",
        name: "Michael Harting",
      },
      {
        quote:
          "Very helpful and responsive staff, great modules, and an overall great immersive learning experience.",
        name: "Patrick Osmena",
      },
      {
        quote:
          "The mentors are extremely knowledgeable and helpful. FES is dedicated to helping you understand the material.",
        name: "Kodiak Cunningham",
      },
      {
        quote:
          "FES is a top notch amazing program with 24/7 mentor support which is out of this world.",
        name: "Michelle",
      },
      {
        quote: "The mentors are great and respond very helpful.",
        name: "Sarah Rios",
      },
      {
        quote:
          "The class can be tough, but I am learning a lot and thankful for the help that I am receiving.",
        name: "Kaytlin Rodin",
      },
      {
        quote:
          "I've learned so much since I've started and like that I'm able to progress at my own pace.",
        name: "Johnson",
      },
      {
        quote:
          "The live sessions, lessons, community, and mentors are 5 out of 5 stars across the board.",
        name: "Samariy Howard",
      },
      {
        quote:
          "Frontend Simplified is a very comprehensive, well put together bootcamp that cuts out the fluff.",
        name: "Jacob Ferris",
      },
      {
        quote:
          "Most of it is easy to follow, with great projects to practice what is being talked about.",
        name: "Dameion Dismuke",
      },
      {
        quote:
          "All the mentors I have worked with have been positive, encouraging, kind, and super helpful.",
        name: "Michele A Acosta",
      },
      {
        quote:
          "The mentors are really helpful and the courses are thoroughly explained.",
        name: "Rachael Vallee",
      },
      {
        quote:
          "The online classes are great at helping me understand, and when I get stuck mentors are there to assist fast.",
        name: "Michelle Petitta",
      },
      {
        quote:
          "Frontend Simplified brought me from knowing nothing about coding to being comfortable creating an entire website in about one month.",
        name: "Josh Knieff",
      },
      {
        quote:
          "The program is easy to follow, and the video plus step-by-step explanations really help everything sink in.",
        name: "Meela Marie",
      },
      {
        quote:
          "For someone who has never coded a single line, this bootcamp has been truly life changing.",
        name: "David Saleh",
      },
      {
        quote:
          "Batool is an incredible coaching mentor and a very good teacher.",
        name: "Steve Carrington",
      },
    ],
  },
  {
    logo: switchup,
    alt: "switchup",
    score: "4.9",
    count: "173 reviews",
    reviewList: [
      {
        quote:
          "The bootcamp is well-structured with modules that can be completed at your own pace, exercises, projects, and continuous mentor support.",
        name: "Kyung Ryun Kim",
      },
      {
        quote:
          "Around-the-clock mentors have answered my questions in less than 2 minutes every time.",
        name: "Victoria Wanko",
      },
      {
        quote:
          "Through the mentorship I've learned so much and truly feel I made the best decision by joining.",
        name: "Laniece Rose",
      },
      {
        quote:
          "The mentors walk you through everything and always help whenever you get stuck or need a lesson explained another way.",
        name: "Marcus Piadade",
      },
      {
        quote:
          "There is 24/7 assistance whenever you are stuck and it is self paced, which is great for people working full time.",
        name: "Luis Martinez",
      },
      {
        quote:
          "The support from the mentors is second to none. Constant recorded workshops are helpful for a busy father like myself.",
        name: "Elvado Smith",
      },
      {
        quote:
          "I started out knowing nothing about coding, but the curriculum and mentors have been so helpful.",
        name: "Jazzlin Taumasina Escovar",
      },
      {
        quote:
          "I have zero coding experience and the mentors are amazing at guiding me through the lessons.",
        name: "Celestia Hall",
      },
      {
        quote:
          "The team is very helpful and there pretty much 24/7 for anything you might need help with.",
        name: "Kevin Marrero",
      },
      {
        quote:
          "I like that I can learn at my own pace and love how David teaches best practices.",
        name: "Mike Haigh",
      },
      {
        quote:
          "Someone is always there to help. The mentors are knowledgeable and patient, and I am learning a lot at my own pace.",
        name: "Corinne Eshleman",
      },
      {
        quote:
          "The program is incredibly well developed and structured in a way that makes everything easy to follow and understand.",
        name: "Nimrah Khalid",
      },
    ],
  },
];

const glassdoorReviews: Review[] = [];

function ReviewCard({ quote, name }: Review) {
  return (
    <div className="flex h-full min-h-[220px] flex-col gap-4 rounded-[16px] bg-white p-5">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3 w-3 fill-[#f7b42c] text-[#f7b42c]" />
        ))}
      </div>
      <p className="text-[18px] font-medium leading-snug text-black">
        &ldquo;{quote}&rdquo;
      </p>
      <hr className="mt-auto border-black/10" />
      <p className="text-[14px] font-medium text-black">{name}</p>
    </div>
  );
}

function ReviewCarousel({
  reviews,
  isPlaying,
}: {
  reviews: Review[];
  isPlaying: boolean;
}) {
  const [reviewsEmblaRef, reviewsEmblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      AutoScroll({
        speed: 1,
        startDelay: 0,
        direction: "backward",
        stopOnInteraction: false,
        playOnInit: false,
      }),
    ],
  );

  useEffect(() => {
    const autoScroll = reviewsEmblaApi?.plugins().autoScroll;
    if (!autoScroll) return;

    if (!isPlaying) {
      autoScroll.stop();
      return;
    }

    const playTimer = window.setTimeout(() => {
      autoScroll.play();
    }, 520);

    return () => window.clearTimeout(playTimer);
  }, [isPlaying, reviewsEmblaApi]);

  return (
    <div
      className={`relative left-1/2 w-screen -translate-x-1/2 pb-6 transition-opacity duration-200 ${
        isPlaying ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="overflow-hidden" ref={reviewsEmblaRef}>
        <div className="-ml-4 flex items-stretch">
          {reviews.map((review, index) => (
            <div
              key={`${review.name}-${index}`}
              className="min-w-0 w-full max-w-[380px] shrink-0 self-stretch pl-4"
            >
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RatingRow({
  logo,
  alt,
  score,
  count,
  reviewList,
  isOpen,
  onToggle,
}: Rating & { isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-white/10">
      <div className="grid grid-cols-1 py-4 md:grid-cols-[minmax(0,360px)_minmax(0,360px)_auto] md:items-center md:gap-4 md:py-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={logo}
            alt={alt}
            height={32}
            className="w-auto object-contain"
          />
        </div>

        {/* Mobile: score+count on left, button on right — one flex row.
            Desktop: md:contents makes this wrapper vanish so children
            become individual grid cells. */}
        <div className="mt-3 flex items-center justify-between md:mt-0 md:contents">
          <div className="flex items-center gap-2.5">
            <Star className="h-5 w-5 fill-[#f7b42c] text-[#f7b42c]" />
            <p className="text-[28px] font-medium leading-none text-white md:text-[32px]">
              {score}
            </p>
            <p className="text-[16px] text-white/70 md:text-[18px]">{count}</p>
          </div>

          <button
            type="button"
            onClick={onToggle}
            className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-[14px] font-semibold text-white transition-all hover:bg-white/20 ${
              isOpen ? "border border-white/30" : "bg-white/[0.12]"
            }`}
          >
            See reviews
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {reviewList.length > 0 && (
        <div
          className="overflow-hidden transition-[max-height,opacity] duration-500 ease-out"
          style={{
            maxHeight: isOpen ? 340 : 0,
            opacity: isOpen ? 1 : 0,
          }}
        >
          <div>
            <ReviewCarousel reviews={reviewList} isPlaying={isOpen} />
          </div>
        </div>
      )}
    </div>
  );
}

export default function RatingsSection() {
  const [openPlatform, setOpenPlatform] = useState<string | null>(null);
  const [ratings, setRatings] = useState(() =>
    topRatings.map((row) => ({
      ...row,
      reviewList: getVisibleReviews(row.reviewList),
    })),
  );

  useEffect(() => {
    setRatings(
      topRatings.map((row) => ({
        ...row,
        reviewList: getRandomReviews(row.reviewList),
      })),
    );
  }, []);

  const toggle = (alt: string) =>
    setOpenPlatform((prev) => (prev === alt ? null : alt));

  return (
    <section className="bg-[#111] py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="text-[28px] font-medium leading-tight tracking-[-0.03em] text-white md:text-[40px]">
          Our programs are rated{" "}
          <span className="relative inline-block">
            4.8 out of 5
            <ScribbleUnderline
              className="pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 md:block hidden"
              color="#E95E32"
            />
          </span>{" "}
          across 1,200+ reviews...
        </h2>

        <div className="mt-8">
          {ratings.map((row) => (
            <RatingRow
              key={row.alt}
              {...row}
              isOpen={openPlatform === row.alt}
              onToggle={() => toggle(row.alt)}
            />
          ))}
        </div>

        <h2
          id="why-us"
          className="mt-16 scroll-mt-28 text-[28px] font-medium leading-tight tracking-[-0.03em] text-white md:text-[40px]"
        >
          Why? Because our mentors love what they do
        </h2>

        <div className="mt-8">
          <div className="border-b border-white/10">
            <div className="grid grid-cols-1 py-4 md:grid-cols-[minmax(0,360px)_minmax(0,360px)_auto] md:items-center md:gap-4 md:py-6">
              {/* Logo */}
              <div className="flex items-center">
                <Image
                  src={glassdoor}
                  alt="Glassdoor"
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </div>

              {/* Mobile: score+count+button in one row; desktop: md:contents */}
              <div className="mt-3 flex items-center justify-between md:mt-0 md:contents">
                <div className="flex items-center gap-2.5">
                  <Star className="h-5 w-5 fill-[#f7b42c] text-[#f7b42c]" />
                  <p className="text-[28px] font-medium leading-none text-white md:text-[32px]">
                    4.8
                  </p>
                  <p className="text-[16px] text-white/70 md:text-[18px]">
                    7 reviews
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => toggle("Glassdoor")}
                  className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-[14px] font-semibold text-white transition-all hover:bg-white/20 ${
                    openPlatform === "Glassdoor"
                      ? "border border-white/30"
                      : "bg-white/[0.12]"
                  }`}
                >
                  See reviews
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      openPlatform === "Glassdoor" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            </div>

            {glassdoorReviews.length > 0 && (
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openPlatform === "Glassdoor"
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-1 gap-4 pb-6 sm:grid-cols-2 lg:grid-cols-3">
                    {glassdoorReviews.map((review) => (
                      <ReviewCard key={review.name} {...review} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
