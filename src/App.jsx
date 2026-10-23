import { useMemo, useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowRight,
  Bell,
  Bookmark,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Clock3,
  Compass,
  FileText,
  Filter,
  LayoutDashboard,
  MapPin,
  Menu,
  Plus,
  Search,
  Settings,
  Sparkles,
  Target,
  Trash2,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

const internships = [
  {
    id: 1,
    company: "Microsoft",
    role: "Software Engineering Intern",
    location: "Bengaluru, India",
    type: "Full-time",
    duration: "10–12 weeks",
    category: "Engineering",
    color: "blue",
    logo: "M",
    description: "Build products and solve real-world engineering problems with a collaborative team.",
    deadline: "Nov 15, 2026",
  },
  {
    id: 2,
    company: "Google",
    role: "UX Design Intern",
    location: "Hyderabad, India",
    type: "Hybrid",
    duration: "12 weeks",
    category: "Design",
    color: "red",
    logo: "G",
    description: "Help design intuitive experiences that make technology more useful for everyone.",
    deadline: "Nov 20, 2026",
  },
  {
    id: 3,
    company: "Adobe",
    role: "Product Management Intern",
    location: "Noida, India",
    type: "Full-time",
    duration: "6 months",
    category: "Product",
    color: "orange",
    logo: "A",
    description: "Work with product teams to shape ideas, understand users, and launch better products.",
    deadline: "Nov 28, 2026",
  },
  {
    id: 4,
    company: "Flipkart",
    role: "Data Analyst Intern",
    location: "Bengaluru, India",
    type: "Hybrid",
    duration: "3 months",
    category: "Data",
    color: "yellow",
    logo: "F",
    description: "Turn data into insights that help teams make smarter business decisions.",
    deadline: "Dec 02, 2026",
  },
  {
    id: 5,
    company: "Deloitte",
    role: "Business Analyst Intern",
    location: "Gurugram, India",
    type: "Full-time",
    duration: "8 weeks",
    category: "Business",
    color: "green",
    logo: "D",
    description: "Collaborate with teams to research business problems and recommend solutions.",
    deadline: "Dec 05, 2026",
  },
  {
    id: 6,
    company: "Amazon",
    role: "Frontend Developer Intern",
    location: "Remote, India",
    type: "Remote",
    duration: "12 weeks",
    category: "Engineering",
    color: "purple",
    logo: "a",
    description: "Create accessible, responsive interfaces and contribute to customer-facing products.",
    deadline: "Dec 10, 2026",
  },
];

const initialApplications = [
  {
    id: 101,
    company: "Microsoft",
    role: "Software Engineering Intern",
    date: "Oct 18, 2026",
    status: "Interview",
    deadline: "Nov 15, 2026",
    color: "blue",
    logo: "M",
  },
  {
    id: 102,
    company: "Google",
    role: "UX Design Intern",
    date: "Oct 16, 2026",
    status: "Applied",
    deadline: "Nov 20, 2026",
    color: "red",
    logo: "G",
  },
  {
    id: 103,
    company: "Adobe",
    role: "Product Management Intern",
    date: "Oct 12, 2026",
    status: "Shortlisted",
    deadline: "Nov 28, 2026",
    color: "orange",
    logo: "A",
  },
  {
    id: 104,
    company: "Flipkart",
    role: "Data Analyst Intern",
    date: "Oct 09, 2026",
    status: "Applied",
    deadline: "Dec 02, 2026",
    color: "yellow",
    logo: "F",
  },
  {
    id: 105,
    company: "Deloitte",
    role: "Business Analyst Intern",
    date: "Oct 04, 2026",
    status: "Rejected",
    deadline: "Dec 05, 2026",
    color: "green",
    logo: "D",
  },
];

function Brand({ light = false }) {
  return (
    <Link to="/" className={`brand ${light ? "brand-light" : ""}`}>
      <span className="brand-mark">
        <Compass size={22} strokeWidth={2.5} />
      </span>
      <span>career<span className="brand-accent">pilot</span></span>
    </Link>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-container">
        <Brand />
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="/#opportunities" onClick={() => setMenuOpen(false)}>Explore internships</a>
          <Link to="/dashboard" onClick={() => setMenuOpen(false)}>My dashboard</Link>
          <a href="/#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
        </nav>

        <div className="nav-actions">
          <Link to="/dashboard" className="button button-outline button-small">
            Log in
          </Link>
          <Link to="/dashboard" className="button button-primary button-small">
            Get started <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </header>
  );
}

function InternshipCard({ internship, saved, onSave, onApply }) {
  return (
    <article className="internship-card">
      <div className="card-topline">
        <div className={`company-logo logo-${internship.color}`}>
          {internship.logo}
        </div>
        <button
          className={`icon-button save-button ${saved ? "is-saved" : ""}`}
          onClick={() => onSave(internship.id)}
          aria-label={saved ? "Remove bookmark" : "Bookmark internship"}
        >
          <Bookmark size={19} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="company-name">{internship.company}</div>
      <h3>{internship.role}</h3>
      <div className="card-meta">
        <span><MapPin size={14} />{internship.location}</span>
        <span><Clock3 size={14} />{internship.duration}</span>
      </div>
      <p className="internship-description">{internship.description}</p>

      <div className="card-bottom">
        <div>
          <span className="category-tag">{internship.category}</span>
          <p className="deadline-text">Deadline: {internship.deadline}</p>
        </div>
        <button className="apply-link" onClick={() => onApply(internship)}>
          Apply <ArrowRight size={16} />
        </button>
      </div>
    </article>
  );
}

function Home({ saved, onSave, onApply }) {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("All fields");
  const [notice, setNotice] = useState("");

  const filteredInternships = useMemo(() => {
    const term = searchText.toLowerCase().trim();

    return internships.filter((item) => {
      const matchesText =
        !term ||
        item.role.toLowerCase().includes(term) ||
        item.company.toLowerCase().includes(term) ||
        item.location.toLowerCase().includes(term);

      const matchesCategory =
        category === "All fields" || item.category === category;

      return matchesText && matchesCategory;
    });
  }, [searchText, category]);

  function handleApply(internship) {
    onApply(internship);
    setNotice(`${internship.role} at ${internship.company} added to your tracker.`);
    window.setTimeout(() => setNotice(""), 3500);
  }

  return (
    <>
      <Navbar />

      <main>
        <section className="hero">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="eyebrow">
                <Sparkles size={15} /> YOUR NEXT CHAPTER STARTS HERE
              </div>

              <h1>
                Your dream career
                <br />
                starts with <span>one click.</span>
              </h1>

              <p className="hero-copy">
                Discover internships that match your ambition. Track every
                application, stay on top of deadlines, and take the next step
                toward the career you want.
              </p>

              <div className="hero-actions">
                <a className="button button-primary button-large" href="#opportunities">
                  Explore internships <ArrowRight size={18} />
                </a>
                <Link className="button button-white button-large" to="/dashboard">
                  <LayoutDashboard size={17} /> View my dashboard
                </Link>
              </div>

              <div className="social-proof">
                <div className="avatar-stack">
                  <span>R</span><span>A</span><span>S</span><span>K</span>
                </div>
                <div>
                  <div className="proof-stars">★★★★★</div>
                  <p>Helping students move forward, one application at a time.</p>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-orbit orbit-one"></div>
              <div className="hero-orbit orbit-two"></div>

              <div className="floating-note note-top">
                <span className="note-icon note-green"><CheckCircle2 size={20} /></span>
                <div>
                  <strong>Application submitted!</strong>
                  <small>You’re one step closer.</small>
                </div>
              </div>

              <div className="hero-art-card">
                <div className="art-card-head">
                  <span className="art-pill"><span></span> Your next opportunity</span>
                  <span className="art-dots">•••</span>
                </div>
                <div className="art-illustration">
                  <div className="sun-shape"></div>
                  <div className="plant plant-left"><i></i><i></i><i></i></div>
                  <div className="plant plant-right"><i></i><i></i><i></i></div>
                  <div className="laptop">
                    <div className="laptop-screen">
                      <div className="screen-profile"></div>
                      <div className="screen-lines"><i></i><i></i><i></i></div>
                      <div className="screen-button"></div>
                    </div>
                    <div className="laptop-base"></div>
                  </div>
                  <div className="art-star star-one">✦</div>
                  <div className="art-star star-two">✧</div>
                </div>
                <div className="art-card-footer">
                  <div>
                    <strong>Make it happen.</strong>
                    <small>Your future is worth the effort.</small>
                  </div>
                  <span className="round-arrow"><ArrowRight size={19} /></span>
                </div>
              </div>

              <div className="floating-note note-bottom">
                <span className="note-icon note-purple"><TrendingUp size={20} /></span>
                <div>
                  <strong>You're making progress</strong>
                  <small>Every application counts.</small>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-bottom-line">
            <span>LESS STRESS, MORE PROGRESS</span>
            <span className="bottom-line-dot"></span>
            <span>YOUR CAREER JOURNEY, ORGANIZED</span>
          </div>
        </section>

        <section className="trust-strip">
          <p>FIND YOUR PLACE AT COMPANIES LIKE</p>
          <div className="company-wordmarks">
            <span className="wordmark microsoft-word"><i></i> Microsoft</span>
            <span className="wordmark google-word">Google</span>
            <span className="wordmark adobe-word">Adobe</span>
            <span className="wordmark amazon-word">amazon</span>
            <span className="wordmark flipkart-word">Flipkart</span>
          </div>
        </section>

        <section className="opportunities section-wrap" id="opportunities">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-dot"></span> HANDPICKED FOR YOU</div>
              <h2>Opportunities worth <span>your time.</span></h2>
              <p>Find a role that fits your skills, interests, and big plans.</p>
            </div>
            <Link to="/dashboard" className="text-link">
              Track your applications <ArrowRight size={17} />
            </Link>
          </div>

          <div className="search-panel">
            <div className="search-input-wrap">
              <Search size={20} />
              <input
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                placeholder="Job title, company, or keyword"
                aria-label="Search internships"
              />
            </div>
            <div className="search-divider"></div>
            <div className="category-select">
              <Filter size={17} />
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                aria-label="Filter by field"
              >
                <option>All fields</option>
                <option>Engineering</option>
                <option>Design</option>
                <option>Product</option>
                <option>Data</option>
                <option>Business</option>
              </select>
              <ChevronDown size={15} />
            </div>
            <button className="button button-primary search-button">
              <Search size={17} /> Search
            </button>
          </div>

          <div className="results-line">
            <span><strong>{filteredInternships.length}</strong> opportunities to explore</span>
            <span>Updated for your next big move <Sparkles size={14} /></span>
          </div>

          {filteredInternships.length > 0 ? (
            <div className="internship-grid">
              {filteredInternships.map((internship) => (
                <InternshipCard
                  key={internship.id}
                  internship={internship}
                  saved={saved.includes(internship.id)}
                  onSave={onSave}
                  onApply={handleApply}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Search size={28} />
              <h3>No internships found</h3>
              <p>Try another keyword or select a different field.</p>
              <button
                className="button button-outline"
                onClick={() => { setSearchText(""); setCategory("All fields"); }}
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        <section className="how-section section-wrap" id="how-it-works">
          <div className="section-heading centered-heading">
            <div className="eyebrow"><span className="eyebrow-dot"></span> SIMPLE BY DESIGN</div>
            <h2>From searching to <span>starting.</span></h2>
            <p>Less juggling spreadsheets. More time building your future.</p>
          </div>

          <div className="steps-grid">
            <article className="step-card">
              <div className="step-number">01</div>
              <div className="step-icon step-icon-green"><Search size={24} /></div>
              <h3>Discover</h3>
              <p>Explore opportunities from companies that are looking for someone like you.</p>
            </article>
            <article className="step-card">
              <div className="step-number">02</div>
              <div className="step-icon step-icon-yellow"><FileText size={24} /></div>
              <h3>Keep track</h3>
              <p>Save roles, organize your applications, and know exactly where you stand.</p>
            </article>
            <article className="step-card">
              <div className="step-number">03</div>
              <div className="step-icon step-icon-purple"><Target size={24} /></div>
              <h3>Move forward</h3>
              <p>Stay ahead of deadlines and focus on the opportunities that matter most.</p>
            </article>
          </div>
        </section>

        <section className="cta-section section-wrap">
          <div className="cta-card">
            <div className="cta-decoration cta-decoration-one"></div>
            <div className="cta-decoration cta-decoration-two"></div>
            <div className="cta-content">
              <span className="cta-label"><Sparkles size={15} /> YOUR FUTURE IS CALLING</span>
              <h2>Big things start with<br />a little <em>momentum.</em></h2>
              <p>Start organizing your applications today. Your next opportunity could be closer than you think.</p>
              <Link to="/dashboard" className="button button-white button-large">
                Build my application tracker <ArrowRight size={18} />
              </Link>
            </div>
            <div className="cta-art">
              <div className="cta-circle"><TrendingUp size={76} strokeWidth={1.2} /></div>
              <span className="cta-spark cta-spark-one">✦</span>
              <span className="cta-spark cta-spark-two">✧</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <Brand />
          <p>Made for the next generation of go-getters.</p>
          <span>© 2026 CareerPilot · Your next chapter starts here.</span>
        </div>
      </footer>

      {notice && (
        <div className="toast-message">
          <CheckCircle2 size={19} /> {notice}
          <button onClick={() => setNotice("")} aria-label="Close message"><X size={16} /></button>
        </div>
      )}
    </>
  );
}

function Sidebar() {
  return (
    <aside className="dashboard-sidebar">
      <Brand />
      <div className="sidebar-label">WORKSPACE</div>
      <nav className="sidebar-nav">
        <a className="sidebar-link active" href="#overview"><LayoutDashboard size={18} /> Overview</a>
        <a className="sidebar-link" href="#applications"><BriefcaseBusiness size={18} /> My applications <span className="sidebar-count">5</span></a>
        <Link className="sidebar-link" to="/#opportunities"><Compass size={18} /> Explore internships</Link>
        <a className="sidebar-link" href="#deadlines"><CalendarDays size={18} /> Deadlines</a>
      </nav>

      <div className="sidebar-label sidebar-label-lower">PREFERENCES</div>
      <nav className="sidebar-nav">
        <button className="sidebar-link sidebar-button" onClick={() => window.alert("Settings are a demo feature.")}>
          <Settings size={18} /> Settings
        </button>
        <button className="sidebar-link sidebar-button" onClick={() => window.alert("Help center is a demo feature.")}>
          <CircleHelp size={18} /> Help & support
        </button>
      </nav>

      <div className="sidebar-tip">
        <div className="tip-icon"><Sparkles size={18} /></div>
        <strong>A little progress adds up.</strong>
        <p>Keep your tracker updated to stay on top of every opportunity.</p>
        <a href="#applications">View tracker <ArrowRight size={14} /></a>
      </div>

      <div className="sidebar-profile">
        <div className="profile-avatar">S</div>
        <div className="profile-info"><strong>Student account</strong><span>Free workspace</span></div>
        <button className="profile-more" aria-label="Profile menu" onClick={() => window.alert("Profile menu is a demo feature.")}>•••</button>
      </div>
    </aside>
  );
}

function StatusBadge({ status }) {
  const statusClass = status.toLowerCase().replace(/\s+/g, "-");
  return <span className={`status-badge status-${statusClass}`}><span></span>{status}</span>;
}

function Dashboard({ applications, setApplications }) {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCompany, setNewCompany] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newDeadline, setNewDeadline] = useState("");

  const filteredApplications = useMemo(() => {
    const term = query.toLowerCase().trim();

    return applications.filter((app) => {
      const matchesStatus = filter === "All" || app.status === filter;
      const matchesQuery =
        !term ||
        app.company.toLowerCase().includes(term) ||
        app.role.toLowerCase().includes(term);
      return matchesStatus && matchesQuery;
    });
  }, [applications, filter, query]);

  const countStatus = (status) =>
    applications.filter((app) => app.status === status).length;

  function updateStatus(id, status) {
    setApplications((current) =>
      current.map((app) => app.id === id ? { ...app, status } : app)
    );
  }

  function addApplication(event) {
    event.preventDefault();
    if (!newCompany.trim() || !newRole.trim()) return;

    const today = new Date();
    const dateLabel = today.toLocaleDateString("en-IN", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });

    setApplications((current) => [
      {
        id: Date.now(),
        company: newCompany.trim(),
        role: newRole.trim(),
        date: dateLabel,
        status: "Applied",
        deadline: newDeadline || "Not specified",
        color: "purple",
        logo: newCompany.trim().charAt(0).toUpperCase(),
      },
      ...current,
    ]);

    setNewCompany("");
    setNewRole("");
    setNewDeadline("");
    setShowAddForm(false);
  }

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <div className="breadcrumb">Workspace <span>/</span> <strong>Overview</strong></div>
          <div className="dashboard-top-actions">
            <label className="dashboard-search">
              <Search size={17} />
              <input
                placeholder="Search applications..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              {query && <button onClick={() => setQuery("")} aria-label="Clear search"><X size={14} /></button>}
            </label>
            <button className="notification-button" aria-label="Notifications" onClick={() => window.alert("You're all caught up!")}>
              <Bell size={19} /><span></span>
            </button>
            <div className="profile-avatar top-avatar">S</div>
          </div>
        </header>

        <div className="dashboard-content" id="overview">
          <section className="dashboard-welcome">
            <div>
              <div className="eyebrow"><span className="eyebrow-dot"></span> YOUR CAREER, IN FOCUS</div>
              <h1>Your applications<span className="heading-period">.</span></h1>
              <p>Every step counts. Here’s how your internship journey is going.</p>
            </div>
            <button className="button button-primary" onClick={() => setShowAddForm(!showAddForm)}>
              {showAddForm ? <X size={17} /> : <Plus size={18} />}
              {showAddForm ? "Cancel" : "Add application"}
            </button>
          </section>

          {showAddForm && (
            <form className="add-application-form" onSubmit={addApplication}>
              <div className="form-heading">
                <div className="form-heading-icon"><Plus size={19} /></div>
                <div><h3>Add a new application</h3><p>Keep every opportunity in one place.</p></div>
              </div>
              <div className="form-fields">
                <label>Company name<input required value={newCompany} onChange={(e) => setNewCompany(e.target.value)} placeholder="e.g. Microsoft" /></label>
                <label>Role title<input required value={newRole} onChange={(e) => setNewRole(e.target.value)} placeholder="e.g. Software Intern" /></label>
                <label>Deadline (optional)<input value={newDeadline} onChange={(e) => setNewDeadline(e.target.value)} placeholder="e.g. Nov 30, 2026" /></label>
                <button className="button button-primary" type="submit"><Plus size={16} /> Save application</button>
              </div>
            </form>
          )}

          <section className="stats-grid">
            <article className="stat-card stat-total">
              <div className="stat-top"><span>Total applications</span><span className="stat-icon"><BriefcaseBusiness size={19} /></span></div>
              <div className="stat-value">{applications.length}<span className="stat-change"><TrendingUp size={13} /> In progress</span></div>
              <div className="stat-foot"><span className="stat-bar"><i style={{ width: "78%" }}></i></span><small>Keep that momentum going</small></div>
            </article>
            <article className="stat-card stat-interview">
              <div className="stat-top"><span>Interviews</span><span className="stat-icon"><Users size={19} /></span></div>
              <div className="stat-value">{countStatus("Interview")}<span className="stat-change">Great progress!</span></div>
              <div className="stat-foot"><span className="stat-bar"><i style={{ width: `${applications.length ? (countStatus("Interview") / applications.length) * 100 : 0}%` }}></i></span><small>Time to shine</small></div>
            </article>
            <article className="stat-card stat-shortlisted">
              <div className="stat-top"><span>Shortlisted</span><span className="stat-icon"><CheckCircle2 size={19} /></span></div>
              <div className="stat-value">{countStatus("Shortlisted")}<span className="stat-change">Looking good</span></div>
              <div className="stat-foot"><span className="stat-bar"><i style={{ width: `${applications.length ? (countStatus("Shortlisted") / applications.length) * 100 : 0}%` }}></i></span><small>One step closer</small></div>
            </article>
            <article className="stat-card stat-deadlines">
              <div className="stat-top"><span>Applications sent</span><span className="stat-icon"><ArrowDownRight size={19} /></span></div>
              <div className="stat-value">{countStatus("Applied") + countStatus("Interview") + countStatus("Shortlisted")}<span className="stat-change">Still moving</span></div>
              <div className="stat-foot"><span className="stat-bar"><i style={{ width: "65%" }}></i></span><small>Progress over perfection</small></div>
            </article>
          </section>

          <section className="dashboard-lower-grid">
            <div className="applications-panel" id="applications">
              <div className="panel-heading">
                <div>
                  <h2>Application tracker</h2>
                  <p>A little organization goes a long way.</p>
                </div>
                <button className="icon-button panel-filter-button" onClick={() => setFilter(filter === "All" ? "Applied" : "All")} aria-label="Toggle filter">
                  <Filter size={18} />
                </button>
              </div>

              <div className="application-filters">
                {["All", "Applied", "Interview", "Shortlisted", "Rejected"].map((status) => (
                  <button
                    key={status}
                    className={`filter-tab ${filter === status ? "filter-active" : ""}`}
                    onClick={() => setFilter(status)}
                  >
                    {status} <span>{status === "All" ? applications.length : countStatus(status)}</span>
                  </button>
                ))}
              </div>

              <div className="applications-table-wrap">
                <table className="applications-table">
                  <thead>
                    <tr>
                      <th>COMPANY & ROLE</th>
                      <th>DATE APPLIED</th>
                      <th>STATUS</th>
                      <th>DEADLINE</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredApplications.map((app) => (
                      <tr key={app.id}>
                        <td>
                          <div className="table-company">
                            <div className={`company-logo table-logo logo-${app.color}`}>{app.logo}</div>
                            <div><strong>{app.company}</strong><span>{app.role}</span></div>
                          </div>
                        </td>
                        <td className="table-date">{app.date}</td>
                        <td>
                          <select
                            className={`status-select status-select-${app.status.toLowerCase()}`}
                            value={app.status}
                            onChange={(event) => updateStatus(app.id, event.target.value)}
                            aria-label={`Status for ${app.company}`}
                          >
                            {["Applied", "Interview", "Shortlisted", "Rejected", "Offer"].map((status) => (
                              <option key={status}>{status}</option>
                            ))}
                          </select>
                        </td>
                        <td className="table-deadline">{app.deadline}</td>
                        <td>
                          <button
                            className="icon-button delete-button"
                            aria-label={`Delete ${app.company} application`}
                            onClick={() => {
                              if (window.confirm(`Delete your ${app.company} application?`)) {
                                setApplications((current) => current.filter((item) => item.id !== app.id));
                              }
                            }}
                          ><Trash2 size={16} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {filteredApplications.length === 0 && (
                  <div className="empty-table">
                    <Search size={24} />
                    <strong>No applications found</strong>
                    <span>Try another filter or add an application.</span>
                  </div>
                )}
              </div>
              <div className="table-footer">
                <span>Showing {filteredApplications.length} of {applications.length} applications</span>
                <Link to="/#opportunities">Discover more roles <ArrowRight size={15} /></Link>
              </div>
            </div>

            <aside className="deadline-panel" id="deadlines">
              <div className="panel-heading">
                <div><h2>Coming up</h2><p>Keep an eye on these dates.</p></div>
                <CalendarDays size={20} className="deadline-heading-icon" />
              </div>
              <div className="deadline-list">
                {applications.filter((app) => app.deadline && app.deadline !== "Not specified").slice(0, 4).map((app, index) => (
                  <div className="deadline-item" key={app.id}>
                    <div className={`deadline-date deadline-date-${index}`}>
                      <CalendarDays size={17} />
                    </div>
                    <div className="deadline-info">
                      <strong>{app.company}</strong>
                      <span>{app.role}</span>
                      <small>{app.deadline}</small>
                    </div>
                    <span className="deadline-dot"></span>
                  </div>
                ))}
                {applications.filter((app) => app.deadline && app.deadline !== "Not specified").length === 0 && (
                  <p className="no-deadlines">Add an application deadline to see it here.</p>
                )}
              </div>
              <div className="deadline-tip">
                <span><Sparkles size={17} /></span>
                <div><strong>A small reminder</strong><p>Follow up politely if you haven’t heard back after a week or two.</p></div>
              </div>
            </aside>
          </section>

          <footer className="dashboard-footer">
            <span>© 2026 CareerPilot</span>
            <span>Small steps. Big futures. <span className="footer-heart">♥</span></span>
          </footer>
        </div>
      </main>
    </div>
  );
}

function NotFound() {
  return (
    <div className="not-found">
      <Compass size={42} />
      <h1>Oops, wrong turn.</h1>
      <p>This page isn't part of your career journey yet.</p>
      <Link to="/" className="button button-primary">Back to home <ArrowRight size={16} /></Link>
    </div>
  );
}

export default function App() {
  const [saved, setSaved] = useState([]);
  const [applications, setApplications] = useState(initialApplications);
  const navigate = useNavigate();

  function toggleSaved(id) {
    setSaved((current) =>
      current.includes(id)
        ? current.filter((savedId) => savedId !== id)
        : [...current, id]
    );
  }

  function addApplicationFromHome(internship) {
    const alreadyExists = applications.some(
      (app) => app.company === internship.company && app.role === internship.role
    );

    if (!alreadyExists) {
      setApplications((current) => [
        {
          id: Date.now(),
          company: internship.company,
          role: internship.role,
          date: new Date().toLocaleDateString("en-IN", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
          status: "Applied",
          deadline: internship.deadline,
          color: internship.color,
          logo: internship.logo,
        },
        ...current,
      ]);
    }

    navigate("/dashboard");
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Home saved={saved} onSave={toggleSaved} onApply={addApplicationFromHome} />}
      />
      <Route
        path="/dashboard"
        element={<Dashboard applications={applications} setApplications={setApplications} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}