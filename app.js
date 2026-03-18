(function () {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const navItems = [
    { href: "index.html", label: "Home" },
    { href: "products.html", label: "Products" },
    { href: "courses.html", label: "Courses" },
    { href: "insights.html", label: "Insights" },
    { href: "pricing.html", label: "Pricing" },
    { href: "about.html", label: "About" },
    { href: "terms.html", label: "Terms" },
  ];

  const productCatalog = [
    {
      id: "debt-destroyer-toolkit",
      name: "Debt Destroyer Toolkit",
      priceLabel: "$9",
      billing: "one-time",
      category: "Debt Strategy",
      accent: "gold",
      blurb:
        "A fast-payoff command center for mapping balances, interest drag, and weekly repayment sprints.",
      detail:
        "Built for operators who want to see the full board before they move. This toolkit turns scattered balances into one disciplined execution plan with payoff sequencing, cash sweep logic, and weekly review rituals.",
      features: [
        "Snowball and avalanche payoff calculator",
        "Interest leakage heatmap",
        "Weekly cash sweep checklist",
      ],
      featured: true,
    },
    {
      id: "credit-card-destroyer-system",
      name: "90-Day Credit Card Destroyer System",
      priceLabel: "$47",
      billing: "one-time",
      category: "Debt Execution",
      accent: "red",
      blurb:
        "A three-phase elimination system designed to compress revolving debt payoff into a focused 90-day campaign.",
      detail:
        "This system combines intensity planning, expense compression, and accountability triggers so high earners can eliminate credit drag quickly instead of carrying it indefinitely.",
      features: [
        "90-day repayment sprint framework",
        "Cash capture templates",
        "Behavioral reset scorecards",
      ],
      featured: true,
    },
    {
      id: "debt-free-vip-coaching",
      name: "Debt-Free VIP Coaching",
      priceLabel: "$297",
      billing: "one-time",
      category: "Private Coaching",
      accent: "gold",
      blurb:
        "Private implementation support for income-rich clients who want debt gone with executive-level accountability.",
      detail:
        "VIP Coaching is designed for clients who do not need more motivation, they need a sharper command cadence. Expect a private strategy path, decision support, and accountability built for speed.",
      features: [
        "Private debt acceleration roadmap",
        "Weekly accountability touchpoints",
        "Payoff sequencing and cashflow optimization",
      ],
      featured: false,
    },
    {
      id: "saas-starter-dashboard",
      name: "SaaS Starter Dashboard",
      priceLabel: "$19/mo",
      billing: "monthly",
      category: "SaaS Intelligence",
      accent: "red",
      blurb:
        "Essential recurring revenue visibility for first-stage operators who need clean clarity on runway, MRR, and churn pulse.",
      detail:
        "Starter Dashboard gives early-stage founders a polished control room with the minimum viable financial instrumentation required to move fast without losing visibility.",
      features: [
        "MRR, churn, and runway snapshots",
        "Foundational KPI dashboard",
        "Weekly operator digest",
      ],
      featured: false,
    },
    {
      id: "saas-pro",
      name: "SaaS Pro",
      priceLabel: "$29/mo",
      billing: "monthly",
      category: "SaaS Intelligence",
      accent: "gold",
      blurb:
        "Advanced subscription analytics with sharper cohort visibility and decision-grade trend tracking.",
      detail:
        "SaaS Pro expands the intelligence layer with sharper revenue segmentation, cohort reads, and operator prompts that keep leadership attention where it matters most.",
      features: [
        "Cohort and retention breakdowns",
        "Scenario-ready planning views",
        "Growth and risk scorecards",
      ],
      featured: false,
    },
    {
      id: "saas-premium",
      name: "SaaS Premium",
      priceLabel: "$49/mo",
      billing: "monthly",
      category: "SaaS Intelligence",
      accent: "gold",
      blurb:
        "The signature SaaS control room with premium forecasting, investor-grade reporting, and live operator visibility.",
      detail:
        "Premium is for teams graduating from dashboarding to real decision infrastructure. It sharpens forecasting, board communication, and recurring revenue command in one place.",
      features: [
        "Investor-ready reporting exports",
        "Advanced forecast modeling",
        "Margin and expansion analytics",
      ],
      featured: true,
    },
    {
      id: "saas-elite",
      name: "SaaS Elite",
      priceLabel: "$79/mo",
      billing: "monthly",
      category: "SaaS Intelligence",
      accent: "red",
      blurb:
        "Executive-grade operating intelligence for scale-stage SaaS teams that need speed, precision, and strategic depth.",
      detail:
        "Elite adds deeper analytics and premium support for teams that run fast and need a financial cockpit that keeps up with strategic tempo.",
      features: [
        "Multi-layer KPI architecture",
        "Strategic growth signal monitoring",
        "Priority operator support",
      ],
      featured: false,
    },
    {
      id: "ultimate-saas-bundle",
      name: "Ultimate SaaS Bundle",
      priceLabel: "$149/mo",
      billing: "monthly",
      category: "SaaS Command",
      accent: "gold",
      blurb:
        "The full recurring revenue stack with dashboards, insights, templates, and operator tools unified in one subscription.",
      detail:
        "The Bundle consolidates the entire Sovereign SaaS stack for founders who want one premium command layer instead of stitching together fragmented analytics products.",
      features: [
        "All SaaS dashboard tiers included",
        "Strategy templates and operating packs",
        "Priority access to premium intelligence drops",
      ],
      featured: true,
    },
    {
      id: "mini-course",
      name: "Mini Course",
      priceLabel: "$67",
      billing: "one-time",
      category: "Education",
      accent: "red",
      blurb:
        "A concise, action-heavy training sprint that sharpens debt elimination, income deployment, and wealth velocity habits.",
      detail:
        "Mini Course is designed for rapid implementation. It removes fluff, concentrates the system, and gets clients moving within one focused learning session.",
      features: [
        "Fast-start wealth acceleration framework",
        "Debt compression action plan",
        "Immediate implementation worksheets",
      ],
      featured: true,
    },
    {
      id: "full-course",
      name: "Full Course",
      priceLabel: "$147",
      billing: "one-time",
      category: "Education",
      accent: "gold",
      blurb:
        "The complete Sovereign wealth acceleration curriculum with deeper frameworks, operating systems, and scale-ready execution rituals.",
      detail:
        "Full Course is the flagship program for clients who want the complete system. It covers debt, cashflow, recurring revenue thinking, and strategic wealth positioning in one cohesive experience.",
      features: [
        "Full wealth acceleration curriculum",
        "Execution templates and scorecards",
        "Long-range operating frameworks",
      ],
      featured: true,
    },
    {
      id: "monthly-insights-reports",
      name: "Monthly Insights Reports",
      priceLabel: "$49/mo",
      billing: "monthly",
      category: "Research",
      accent: "gold",
      blurb:
        "A monthly stream of curated market, macro, and private wealth briefings designed for decisive operators.",
      detail:
        "These reports distill what matters most for private capital builders: capital allocation, macro posture, risk signals, and tactical wealth moves you can act on quickly.",
      features: [
        "Monthly macro and strategy briefings",
        "High-signal opportunity maps",
        "Risk radar and decision notes",
      ],
      featured: true,
    },
    {
      id: "vault-membership",
      name: "Vault Membership",
      priceLabel: "$49/mo",
      billing: "monthly",
      category: "Membership",
      accent: "red",
      blurb:
        "A private members layer for exclusive drops, premium tools, tactical sessions, and continuous wealth acceleration support.",
      detail:
        "Vault is the ongoing membership experience for clients who want continuity, high-touch releases, and a private room for better financial decisions.",
      features: [
        "Members-only product drops",
        "Private tactical sessions",
        "Exclusive deal and strategy notes",
      ],
      featured: true,
    },
    {
      id: "podcast-premium",
      name: "Podcast Premium",
      priceLabel: "$19/mo",
      billing: "monthly",
      category: "Audio Intelligence",
      accent: "gold",
      blurb:
        "Private audio briefings for founders and investors who want strategic signal without wasting hours on noise.",
      detail:
        "Podcast Premium delivers compact audio intelligence designed for commutes, workouts, and transitions between meetings while keeping the strategic depth intact.",
      features: [
        "Premium weekly audio briefings",
        "Exclusive founder conversations",
        "Rapid insight recaps",
      ],
      featured: false,
    },
    {
      id: "ai-agent-rental",
      name: "AI Agent Rental",
      priceLabel: "$99/mo",
      billing: "monthly",
      category: "AI Infrastructure",
      accent: "red",
      blurb:
        "On-demand AI execution support for research, synthesis, drafting, and operator leverage across your financial workflow.",
      detail:
        "AI Agent Rental is built for teams who want more output without increasing operational drag. It gives you an execution layer that helps accelerate analysis, writing, and decision support.",
      features: [
        "Research and synthesis assistance",
        "Execution leverage across ops",
        "Prompt packs and workflow accelerators",
      ],
      featured: true,
    },
    {
      id: "digital-nation-citizenship",
      name: "Digital Nation Citizenship",
      priceLabel: "$497/yr",
      billing: "annual",
      category: "Access",
      accent: "gold",
      blurb:
        "Annual access to Sovereign's private digital ecosystem, strategic circle, and premium citizenship privileges.",
      detail:
        "Citizenship is the annual access layer for clients who want a deeper relationship with the platform, including premium circles, member-only sessions, and elevated access rights.",
      features: [
        "Annual citizenship access",
        "Private digital community privileges",
        "Priority invitations and releases",
      ],
      featured: true,
    },
  ];

  window.SOVEREIGN = { productCatalog };

  function currentPage() {
    const segments = window.location.pathname.split("/").filter(Boolean);
    const page = segments[segments.length - 1] || "index.html";
    return page.endsWith(".html") ? page : "index.html";
  }

  function formatValue(value, decimals) {
    return Number(value).toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }

  function renderNav() {
    const holder = document.querySelector("[data-site-nav]");
    if (!holder) {
      return;
    }

    const page = currentPage();
    const desktopLinks = navItems
      .map((item) => {
        const active = item.href === page ? "is-active text-white" : "text-zinc-400 hover:text-white";
        return `<a href="${item.href}" class="nav-link ${active}">${item.label}</a>`;
      })
      .join("");

    const mobileLinks = navItems
      .map((item) => {
        const active = item.href === page ? "text-white" : "text-zinc-400";
        return `<a href="${item.href}" class="block rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm font-semibold uppercase tracking-[0.24em] ${active}">${item.label}</a>`;
      })
      .join("");

    holder.innerHTML = `
      <div class="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 lg:px-8">
        <div class="nav-shell mx-auto mt-4 max-w-7xl">
          <div class="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <a href="index.html" class="flex items-center gap-3">
              <span class="brand-mark"><span></span></span>
              <span>
                <span class="block font-display text-xl uppercase tracking-[0.36em] text-white">Sovereign</span>
                <span class="block text-[10px] uppercase tracking-[0.62em] text-zinc-500">Capital</span>
              </span>
            </a>
            <div class="hidden items-center gap-6 lg:flex">${desktopLinks}</div>
            <div class="hidden items-center gap-3 lg:flex">
              <a href="pricing.html" class="btn-secondary">Pricing</a>
              <a href="#" class="btn-primary">Buy Now</a>
            </div>
            <button type="button" class="menu-toggle lg:hidden" data-menu-toggle aria-expanded="false" aria-controls="mobile-menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
          <div id="mobile-menu" class="mobile-menu border-t border-white/5 px-4 pb-4 pt-2 lg:hidden" data-mobile-menu>${mobileLinks}</div>
          <span class="scroll-progress" data-scroll-progress></span>
        </div>
      </div>
    `;
  }

  function renderFooter() {
    const holder = document.querySelector("[data-site-footer]");
    if (!holder) {
      return;
    }

    const links = navItems
      .map((item) => `<a href="${item.href}" class="text-sm uppercase tracking-[0.28em] text-zinc-400 transition hover:text-white">${item.label}</a>`)
      .join("");

    holder.innerHTML = `
      <footer class="relative border-t border-white/5 px-4 py-14 sm:px-6 lg:px-8">
        <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr,0.8fr]">
          <div class="premium-card rounded-[2rem] p-8 sm:p-10">
            <div class="card-shine"></div>
            <div class="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div class="max-w-xl">
                <span class="section-kicker">Private Wealth Tech</span>
                <h2 class="mt-5 font-display text-4xl text-white sm:text-5xl">Sophisticated capital systems for people who move with intent.</h2>
                <p class="mt-4 max-w-2xl text-sm leading-8 text-zinc-300 sm:text-base">
                  Sovereign Capital merges private banking discipline, wealth acceleration frameworks, and operator-grade software into one premium experience.
                </p>
              </div>
              <div class="flex flex-col gap-3 sm:flex-row">
                <a href="products.html" class="btn-secondary">Explore Tools</a>
                <a href="#" class="btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
          <div class="grid gap-6">
            <div class="rounded-[2rem] border border-white/5 bg-white/[0.03] p-8">
              <p class="text-xs uppercase tracking-[0.32em] text-zinc-500">Navigation</p>
              <div class="mt-5 grid grid-cols-2 gap-4">
                ${links}
              </div>
            </div>
            <div class="rounded-[2rem] border border-white/5 bg-white/[0.03] p-8">
              <p class="text-xs uppercase tracking-[0.32em] text-zinc-500">Contact</p>
              <p class="mt-4 text-sm leading-8 text-zinc-300">
                Private capital interface for operators, investors, and members.
                <br />
                inquiries@sovereigncapital.private
              </p>
              <p class="mt-6 text-xs uppercase tracking-[0.28em] text-zinc-500">All rights reserved. <span data-current-year></span></p>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  function renderFeaturedGrid() {
    const grid = document.querySelector("[data-featured-grid]");
    if (!grid) {
      return;
    }

    const featured = productCatalog.filter((product) => product.featured).slice(0, 6);
    grid.innerHTML = featured
      .map(
        (product) => `
          <article class="premium-card tilt-card reveal rounded-[2rem] p-6 sm:p-7" data-tilt>
            <div class="card-shine"></div>
            <div class="tilt-inner flex h-full flex-col">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <p class="text-[11px] uppercase tracking-[0.3em] text-zinc-500">${product.category}</p>
                  <h3 class="mt-4 font-display text-3xl text-white">${product.name}</h3>
                </div>
                <span class="rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.28em] ${
                  product.accent === "gold"
                    ? "border-gold/20 bg-gold/10 text-gold"
                    : "border-crimson/20 bg-crimson/10 text-crimson"
                }">${product.billing === "monthly" ? "Monthly" : product.billing === "annual" ? "Annual" : "One-Time"}</span>
              </div>
              <div class="mt-6 flex items-end gap-2">
                <span class="text-4xl font-semibold text-white">${product.priceLabel}</span>
              </div>
              <p class="mt-5 text-sm leading-7 text-zinc-300">${product.blurb}</p>
              <div class="mt-7 space-y-3">
                ${product.features
                  .slice(0, 3)
                  .map(
                    (feature) => `
                      <div class="flex items-center gap-3 text-sm text-zinc-300">
                        <span class="h-2 w-2 rounded-full ${
                          product.accent === "gold" ? "bg-gold" : "bg-crimson"
                        }"></span>
                        <span>${feature}</span>
                      </div>
                    `
                  )
                  .join("")}
              </div>
              <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                <button class="btn-secondary flex-1" data-modal-open="product-modal" data-product-id="${product.id}">View Details</button>
                <a href="#" class="btn-primary flex-1">Buy Now</a>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function getFilterProducts(filter) {
    if (filter === "recurring") {
      return productCatalog.filter((product) => product.billing === "monthly" || product.billing === "annual");
    }

    if (filter === "debt") {
      return productCatalog.filter((product) => product.category.toLowerCase().includes("debt"));
    }

    if (filter === "saas") {
      return productCatalog.filter((product) => product.category.toLowerCase().includes("saas"));
    }

    if (filter === "education") {
      return productCatalog.filter((product) => product.category.toLowerCase().includes("education"));
    }

    if (filter === "research") {
      return productCatalog.filter((product) => {
        const category = product.category.toLowerCase();
        return category.includes("research") || category.includes("membership") || category.includes("audio");
      });
    }

    return productCatalog;
  }

  function productCard(product) {
    const badgeLabel =
      product.billing === "monthly" ? "Monthly Access" : product.billing === "annual" ? "Annual Access" : "One-Time Access";
    const accentClasses =
      product.accent === "gold"
        ? "border-gold/20 bg-gold/10 text-gold"
        : "border-crimson/20 bg-crimson/10 text-crimson";
    const dotClass = product.accent === "gold" ? "bg-gold" : "bg-crimson";

    return `
      <article class="premium-card tilt-card reveal rounded-[2rem] p-6 sm:p-7" data-tilt>
        <div class="card-shine"></div>
        <div class="tilt-inner flex h-full flex-col">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-[11px] uppercase tracking-[0.32em] text-zinc-500">${product.category}</p>
              <h3 class="mt-4 font-display text-3xl leading-none text-white">${product.name}</h3>
            </div>
            <span class="rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.28em] ${accentClasses}">${badgeLabel}</span>
          </div>
          <div class="mt-8 flex items-end gap-2">
            <span class="text-4xl font-semibold text-white">${product.priceLabel}</span>
          </div>
          <p class="mt-5 text-sm leading-7 text-zinc-300">${product.blurb}</p>
          <div class="mt-7 grid gap-3">
            ${product.features
              .map(
                (feature) => `
                  <div class="flex items-center gap-3 text-sm text-zinc-300">
                    <span class="h-2 w-2 rounded-full ${dotClass}"></span>
                    <span>${feature}</span>
                  </div>
                `
              )
              .join("")}
          </div>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <button class="btn-secondary flex-1" data-modal-open="product-modal" data-product-id="${product.id}">View Details</button>
            <a href="#" class="btn-primary flex-1">Buy Now</a>
          </div>
        </div>
      </article>
    `;
  }

  function renderProductsGrid() {
    const grid = document.querySelector("[data-products-grid]");
    if (!grid) {
      return;
    }

    let activeFilter = "all";

    const draw = () => {
      const products = getFilterProducts(activeFilter);
      grid.innerHTML = products.map(productCard).join("");
      bindRevealObservers();
      bindTiltCards();
    };

    document.querySelectorAll("[data-product-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        activeFilter = button.dataset.productFilter || "all";
        document.querySelectorAll("[data-product-filter]").forEach((item) => {
          item.classList.remove("bg-crimson", "text-white", "border-crimson/30");
          item.classList.add("bg-white/[0.03]", "text-zinc-400", "border-white/10");
        });
        button.classList.remove("bg-white/[0.03]", "text-zinc-400", "border-white/10");
        button.classList.add("bg-crimson", "text-white", "border-crimson/30");
        draw();
      });
    });

    draw();
  }

  function pricingCard(product) {
    const featured = product.id === "full-course" || product.id === "vault-membership" || product.id === "saas-premium";
    const accent = product.accent === "gold" ? "border-gold/20 text-gold" : "border-crimson/20 text-crimson";

    return `
      <article class="premium-card reveal rounded-[2rem] p-7 ${featured ? "ring-1 ring-gold/30" : ""}">
        <div class="card-shine"></div>
        <div class="relative z-10 flex h-full flex-col">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-[11px] uppercase tracking-[0.32em] text-zinc-500">${product.category}</p>
              <h3 class="mt-4 font-display text-3xl text-white">${product.name}</h3>
            </div>
            <span class="rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.28em] ${accent}">
              ${featured ? "Preferred" : product.billing === "monthly" ? "Recurring" : product.billing === "annual" ? "Annual" : "Single"}
            </span>
          </div>
          <div class="mt-8">
            <div class="flex items-end gap-2">
              <span class="text-5xl font-semibold text-white">${product.priceLabel}</span>
            </div>
            <p class="mt-5 text-sm leading-7 text-zinc-300">${product.blurb}</p>
          </div>
          <div class="mt-7 space-y-3">
            ${product.features
              .map(
                (feature) => `
                  <div class="flex items-center gap-3 text-sm text-zinc-300">
                    <span class="h-2 w-2 rounded-full ${product.accent === "gold" ? "bg-gold" : "bg-crimson"}"></span>
                    <span>${feature}</span>
                  </div>
                `
              )
              .join("")}
          </div>
          <div class="mt-8 flex flex-col gap-3">
            <button class="btn-secondary" data-modal-open="product-modal" data-product-id="${product.id}">View Details</button>
            <a href="#" class="btn-primary">Buy Now</a>
          </div>
        </div>
      </article>
    `;
  }

  function renderPricingGrid() {
    const grid = document.querySelector("[data-pricing-grid]");
    if (!grid) {
      return;
    }

    const summary = document.querySelector("[data-pricing-summary]");
    let scope = "one-time";

    const scopeProducts = (value) => {
      if (value === "monthly") {
        return productCatalog.filter((product) => product.billing === "monthly");
      }
      return productCatalog.filter((product) => product.billing === "one-time" || product.billing === "annual");
    };

    const draw = () => {
      const products = scopeProducts(scope);
      grid.innerHTML = products.map(pricingCard).join("");
      if (summary) {
        summary.innerHTML =
          scope === "monthly"
            ? `<span class="text-white">Recurring Access:</span> Premium subscriptions for ongoing tools, intelligence, and leverage.`
            : `<span class="text-white">One-Time Access:</span> Immediate acquisitions, flagship courses, and annual citizenship access.`;
      }
      bindRevealObservers();
    };

    document.querySelectorAll("[data-plan-scope]").forEach((button) => {
      button.addEventListener("click", () => {
        scope = button.dataset.planScope || "one-time";
        document.querySelectorAll("[data-plan-scope]").forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        draw();
      });
    });

    draw();
  }

  function bindRevealObservers() {
    const elements = document.querySelectorAll(".reveal:not([data-reveal-bound])");
    if (!elements.length || prefersReducedMotion) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
        element.dataset.revealBound = "true";
      });
      return;
    }

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
        element.dataset.revealBound = "true";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            entry.target.dataset.revealBound = "true";
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
  }

  function bindCounters() {
    const counters = document.querySelectorAll("[data-counter]");
    if (!counters.length) {
      return;
    }

    const animate = (element) => {
      const target = Number(element.dataset.counter || 0);
      const decimals = Number(element.dataset.decimals || 0);
      const prefix = element.dataset.prefix || "";
      const suffix = element.dataset.suffix || "";
      const duration = Number(element.dataset.duration || 1800);
      const start = performance.now();

      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        element.textContent = `${prefix}${formatValue(value, decimals)}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      counters.forEach((element) => {
        element.textContent = `${element.dataset.prefix || ""}${formatValue(
          Number(element.dataset.counter || 0),
          Number(element.dataset.decimals || 0)
        )}${element.dataset.suffix || ""}`;
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach((element) => observer.observe(element));
  }

  function bindLiveCounters() {
    const liveCounters = document.querySelectorAll("[data-live-counter]");
    if (!liveCounters.length) {
      return;
    }

    liveCounters.forEach((element) => {
      const base = Number(element.dataset.base || 0);
      const step = Number(element.dataset.step || 0);
      const prefix = element.dataset.prefix || "";
      const suffix = element.dataset.suffix || "";
      const decimals = Number(element.dataset.decimals || 0);
      const compact = element.dataset.compact === "true";
      let value = base;

      const render = () => {
        const display = compact
          ? new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(value)
          : formatValue(value, decimals);
        element.textContent = `${prefix}${display}${suffix}`;
      };

      render();

      if (prefersReducedMotion) {
        return;
      }

      window.setInterval(() => {
        value += step + Math.floor(Math.random() * Math.max(2, step / 4));
        render();
      }, 1400);
    });
  }

  function bindParallax() {
    const layers = document.querySelectorAll("[data-parallax]");
    if (!layers.length || prefersReducedMotion) {
      return;
    }

    const onScroll = () => {
      const scrollY = window.scrollY;
      layers.forEach((layer) => {
        const speed = Number(layer.dataset.speed || 0.08);
        layer.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function bindTiltCards() {
    const cards = document.querySelectorAll("[data-tilt]:not([data-tilt-bound])");
    if (!cards.length) {
      return;
    }

    cards.forEach((card) => {
      card.dataset.tiltBound = "true";

      if (prefersReducedMotion) {
        return;
      }

      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty("--ry", `${px * 12}deg`);
        card.style.setProperty("--rx", `${py * -12}deg`);
        card.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
        card.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`);
      });

      card.addEventListener("mouseleave", () => {
        card.style.setProperty("--ry", "0deg");
        card.style.setProperty("--rx", "0deg");
      });
    });
  }

  function bindHoverVideos() {
    const cards = document.querySelectorAll("[data-hover-video]:not([data-video-bound])");
    if (!cards.length) {
      return;
    }

    cards.forEach((card) => {
      const video = card.querySelector("video");
      if (!video) {
        return;
      }

      card.dataset.videoBound = "true";

      const play = () => {
        card.classList.add("is-playing");
        video.play().catch(() => {});
      };

      const reset = () => {
        card.classList.remove("is-playing");
        video.pause();
        video.currentTime = 0;
      };

      card.addEventListener("mouseenter", play);
      card.addEventListener("mouseleave", reset);
      card.addEventListener("focusin", play);
      card.addEventListener("focusout", reset);
    });
  }

  function updateScrollProgress() {
    const bars = document.querySelectorAll("[data-scroll-progress]");
    if (!bars.length) {
      return;
    }

    const setValue = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (window.scrollY / height) * 100 : 0;
      bars.forEach((bar) => {
        bar.style.width = `${Math.min(progress, 100)}%`;
      });
    };

    setValue();
    window.addEventListener("scroll", setValue, { passive: true });
  }

  function fillProductModal(modal, productId) {
    const product = productCatalog.find((item) => item.id === productId);
    if (!product) {
      return;
    }

    const eyebrow = modal.querySelector("[data-modal-eyebrow]");
    const title = modal.querySelector("[data-modal-title]");
    const price = modal.querySelector("[data-modal-price]");
    const body = modal.querySelector("[data-modal-body]");
    const list = modal.querySelector("[data-modal-list]");

    if (eyebrow) {
      eyebrow.textContent = product.category;
    }
    if (title) {
      title.textContent = product.name;
    }
    if (price) {
      price.textContent = product.priceLabel;
    }
    if (body) {
      body.textContent = product.detail;
    }
    if (list) {
      list.innerHTML = product.features
        .map(
          (feature) => `
            <div class="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm text-zinc-200">
              <span class="h-2.5 w-2.5 rounded-full ${product.accent === "gold" ? "bg-gold" : "bg-crimson"}"></span>
              <span>${feature}</span>
            </div>
          `
        )
        .join("");
    }
  }

  function fillGenericModal(modal, trigger) {
    const title = modal.querySelector("[data-generic-title]");
    const eyebrow = modal.querySelector("[data-generic-eyebrow]");
    const body = modal.querySelector("[data-generic-body]");
    const list = modal.querySelector("[data-generic-list]");
    const price = modal.querySelector("[data-generic-price]");

    if (eyebrow) {
      eyebrow.textContent = trigger.dataset.modalEyebrow || "Briefing";
    }
    if (title) {
      title.textContent = trigger.dataset.modalTitle || "Sovereign Capital";
    }
    if (body) {
      body.textContent = trigger.dataset.modalCopy || "";
    }
    if (price) {
      price.textContent = trigger.dataset.modalPrice || "";
    }
    if (list) {
      const points = (trigger.dataset.modalPoints || "").split("|").filter(Boolean);
      list.innerHTML = points
        .map(
          (point) => `
            <div class="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm text-zinc-200">
              <span class="h-2.5 w-2.5 rounded-full bg-gold"></span>
              <span>${point}</span>
            </div>
          `
        )
        .join("");
    }
  }

  function openModal(modal) {
    modal.classList.add("is-open");
    document.body.classList.add("modal-lock");
  }

  function closeModal(modal) {
    if (!modal) {
      return;
    }
    modal.classList.remove("is-open");
    document.body.classList.remove("modal-lock");
  }

  function bindModals() {
    document.addEventListener("click", (event) => {
      const opener = event.target.closest("[data-modal-open]");
      if (opener) {
        event.preventDefault();
        const modal = document.getElementById(opener.dataset.modalOpen || "");
        if (!modal) {
          return;
        }
        if (opener.dataset.productId) {
          fillProductModal(modal, opener.dataset.productId);
        } else {
          fillGenericModal(modal, opener);
        }
        openModal(modal);
        return;
      }

      const closer = event.target.closest("[data-modal-close], [data-modal-backdrop]");
      if (closer) {
        closeModal(closer.closest(".modal"));
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        document.querySelectorAll(".modal.is-open").forEach((modal) => closeModal(modal));
      }
    });
  }

  function bindMobileMenu() {
    const toggle = document.querySelector("[data-menu-toggle]");
    const menu = document.querySelector("[data-mobile-menu]");
    if (!toggle || !menu) {
      return;
    }

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      menu.classList.toggle("is-open");
    });
  }

  function bindPageTransitions() {
    const overlay = document.createElement("div");
    overlay.className = "page-transition-overlay";
    document.body.appendChild(overlay);

    const internalLink = (element) => {
      if (!element || !element.href) {
        return false;
      }

      const href = element.getAttribute("href");
      if (!href || href.startsWith("#") || element.target === "_blank" || element.hasAttribute("download")) {
        return false;
      }

      const url = new URL(element.href, window.location.href);
      return url.origin === window.location.origin && url.pathname.endsWith(".html");
    };

    document.addEventListener("click", (event) => {
      const anchor = event.target.closest("a[href]");
      if (!internalLink(anchor)) {
        return;
      }

      event.preventDefault();
      const url = new URL(anchor.href, window.location.href);
      overlay.classList.add("active");
      document.body.classList.add("page-leaving");
      window.setTimeout(() => {
        window.location.href = url.href;
      }, 520);
    });

    window.addEventListener("pageshow", () => {
      overlay.classList.remove("active");
      document.body.classList.remove("page-leaving");
    });
  }

  function fillCurrentYear() {
    document.querySelectorAll("[data-current-year]").forEach((element) => {
      element.textContent = String(new Date().getFullYear());
    });
  }

  function readyState() {
    if (prefersReducedMotion) {
      document.body.classList.add("is-ready");
      return;
    }
    requestAnimationFrame(() => document.body.classList.add("is-ready"));
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderNav();
    renderFooter();
    renderFeaturedGrid();
    renderProductsGrid();
    renderPricingGrid();
    fillCurrentYear();
    readyState();
    bindMobileMenu();
    bindModals();
    bindRevealObservers();
    bindCounters();
    bindLiveCounters();
    bindParallax();
    bindTiltCards();
    bindHoverVideos();
    updateScrollProgress();
    bindPageTransitions();
  });
})();
