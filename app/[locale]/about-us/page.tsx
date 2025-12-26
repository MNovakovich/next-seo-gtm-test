const teamMembers = [
  {
    id: "1",
    name: "Elena Varga",
    role: "CEO & Co-Founder",
    bio: "Former blockchain architect at Deutsche Bank with 12 years of experience in fintech innovation.",
    avatar: "https://i.pravatar.cc/150?u=elena",
  },
  {
    id: "2",
    name: "Marcus Chen",
    role: "CTO",
    bio: "Ex-Google engineer specializing in distributed systems and cryptographic protocols.",
    avatar: "https://i.pravatar.cc/150?u=marcus",
  },
  {
    id: "3",
    name: "Sofia Andersson",
    role: "Head of Product",
    bio: "Product leader who previously scaled payment solutions at Stripe across 40+ countries.",
    avatar: "https://i.pravatar.cc/150?u=sofia",
  },
  {
    id: "4",
    name: "James Okonkwo",
    role: "Head of Security",
    bio: "Cybersecurity expert with background in intelligence and banking security infrastructure.",
    avatar: "https://i.pravatar.cc/150?u=james",
  },
  {
    id: "5",
    name: "Mira Petrov",
    role: "Head of Compliance",
    bio: "Regulatory specialist with experience at the European Central Bank and major crypto exchanges.",
    avatar: "https://i.pravatar.cc/150?u=mira",
  },
  {
    id: "6",
    name: "David Müller",
    role: "Lead Designer",
    bio: "Award-winning UX designer passionate about making crypto accessible to everyone.",
    avatar: "https://i.pravatar.cc/150?u=david",
  },
];

const stats = [
  { label: "Active Users", value: "2.4M+" },
  { label: "Countries Served", value: "35" },
  { label: "Crypto Assets", value: "180+" },
  { label: "Trading Volume", value: "€12B+" },
];

const milestones = [
  { year: "2017", event: "Founded in Amsterdam with a mission to democratize crypto" },
  { year: "2018", event: "Launched our first mobile app with 10 cryptocurrencies" },
  { year: "2019", event: "Reached 100,000 registered users" },
  { year: "2020", event: "Obtained DNB registration and expanded to 25 countries" },
  { year: "2021", event: "Crossed 1 million users and launched staking services" },
  { year: "2022", event: "Introduced instant SEPA payments and 24/7 support" },
  { year: "2023", event: "Expanded to 35 countries with 150+ cryptocurrencies" },
  { year: "2024", event: "Launched advanced trading features and portfolio analytics" },
];

export default function AboutUsPage() {
  return (
    <div id="about-us-page" className="flex flex-col gap-16 py-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold tracking-tight text-foreground">
          Building the Future of Finance
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-zinc-600 dark:text-zinc-400">
          We're on a mission to make cryptocurrency accessible, secure, and
          simple for everyone. From beginners to experts, we empower millions
          to take control of their financial future.
        </p>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center rounded-xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-6 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950"
          >
            <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              {stat.value}
            </span>
            <span className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {stat.label}
            </span>
          </div>
        ))}
      </section>

      {/* Mission & Vision */}
      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
            <svg
              className="h-6 w-6 text-emerald-600 dark:text-emerald-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            To democratize access to cryptocurrency and empower individuals
            worldwide to participate in the new digital economy. We believe
            financial freedom should be available to everyone, not just the
            privileged few.
          </p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
            <svg
              className="h-6 w-6 text-blue-600 dark:text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            A world where digital assets are seamlessly integrated into
            everyday life, enabling instant, borderless transactions and true
            ownership of your wealth. We're building the infrastructure for
            tomorrow's financial system.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
          Meet Our Team
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center rounded-xl border border-zinc-200 bg-white p-6 text-center transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="h-24 w-24 rounded-full object-cover ring-4 ring-zinc-100 dark:ring-zinc-800"
              />
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                {member.role}
              </span>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section>
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
          Our Journey
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-zinc-200 dark:bg-zinc-800" />
          <div className="flex flex-col gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-5/12 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900 ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                    {milestone.year}
                  </span>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {milestone.event}
                  </p>
                </div>
                <div className="absolute left-1/2 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-emerald-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="rounded-2xl bg-gradient-to-br from-emerald-50 to-blue-50 p-8 dark:from-emerald-950/20 dark:to-blue-950/20">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
          Our Core Values
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50">
              <svg
                className="h-7 w-7 text-emerald-600 dark:text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Security First
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Your assets are protected by industry-leading security measures
              and insurance coverage.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50">
              <svg
                className="h-7 w-7 text-blue-600 dark:text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Customer Obsessed
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Every decision we make starts with the question: how does this
              benefit our users?
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/50">
              <svg
                className="h-7 w-7 text-purple-600 dark:text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Constant Innovation
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              We never stop improving. Our team is constantly exploring new
              ways to enhance your experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

