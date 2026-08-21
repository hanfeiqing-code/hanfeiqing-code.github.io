import Image from 'next/image';

const navItems = ['首页', '关于我', '产品能力', 'AI 项目', 'AIGC 作品', '联系我'];

const shortcuts = [
  { image: '/images/nav-about.png', title: '关于我', description: '跨学科背景与求职目标', tone: 'clay' },
  { image: '/images/nav-skills.png', title: '产品能力', description: '洞察 · 规划 · 协作 · 验证', tone: 'olive' },
  { image: '/images/nav-projects.png', title: 'AI 项目', description: '从真实问题到工具方案', tone: 'amber' },
  { image: '/images/nav-works.png', title: 'AIGC 作品', description: '视觉探索与工作流实践', tone: 'teal' },
  { image: '/images/nav-contact.png', title: '联系我', description: '简历与联系方式', tone: 'sand' },
];

const abilities = [
  {
    number: '01',
    title: '场景与问题',
    description: '从内容生产与设计协作场景中，识别重复劳动、使用门槛与一致性问题。',
    tags: ['需求拆解', '场景理解'],
  },
  {
    number: '02',
    title: '方案与流程',
    description: '把目标拆成可执行步骤，用提示词、Agent、Skill、节点与组件连接流程。',
    tags: ['工作流设计', '方案规划'],
  },
  {
    number: '03',
    title: '工具与原型',
    description: '用 ComfyUI、Coze、Python 与 AI 编程工具搭建原型，验证方案可行性。',
    tags: ['快速原型', 'AI 工具'],
  },
  {
    number: '04',
    title: '规范与沉淀',
    description: '把一次性交付沉淀为视觉规范、模块组件与可复用的数字资产。',
    tags: ['产品化', '资产复用'],
  },
];

const projects = [
  {
    number: '01',
    category: 'AI 工具',
    title: 'ComfyUI 创作效率插件套件',
    description: '围绕图像调节与中文提示词使用门槛，设计并开发可复用节点，把分散操作封装进工作流。',
    role: '独立设计与开发',
    image: '/projects/comfyui-nodes.webp',
    tags: ['ComfyUI', 'Python', '节点产品'],
  },
  {
    number: '02',
    category: 'AI 工作流',
    title: '亲子研学 AI 图文工作流',
    description: '串联策划文案、视觉生成与版式输出，探索文旅研学内容从需求到交付的模块化生产方式。',
    role: '工作流设计与视觉落地',
    image: '/projects/study-workflow.webp',
    tags: ['GPT', 'Coze', '组件库'],
  },
  {
    number: '03',
    category: '生产系统',
    title: 'SafeMeal 电商 AI 视觉系统',
    description: '面向人力与预算有限的品牌，把大促物料拆成提示词、批量生成、精修与规范交付流程。',
    role: '设计与视觉负责人',
    image: '/projects/safemeal-system.webp',
    tags: ['Midjourney', 'ComfyUI', '规范化'],
  },
  {
    number: '04',
    category: '数字资产',
    title: '“小莓”品牌 IP 资产系统',
    description: '从角色设定、LoRA 训练到表情动作与周边应用，沉淀可持续生成的区域农产品数字资产。',
    role: '设计与视觉负责人',
    image: '/projects/xiaomei-ip.webp',
    tags: ['IP 产品化', 'LoRA', '资产体系'],
  },
];

const experiences = [
  {
    date: '2026.06 — 至今',
    title: '北京智乐活科技有限公司 · AI 提效部门',
    description: '参与儿童英语动画内容生产，开展提示词与 Skill 设计、Agent 工作流搭建及网页工具制作。',
  },
  {
    date: '2025 — 2026',
    title: 'AI 产品化独立项目',
    description: '围绕 ComfyUI 节点、AIGC 生产系统、数字 IP 与自动化内容工作流持续实践。',
  },
  {
    date: '2024.04 — 2026.05',
    title: '南京农业大学规划设计研究院 · 项目实践',
    description: '参与乡村、研学与景观项目，负责场地分析、方案设计与视觉落地，积累复杂场景理解能力。',
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="brand" aria-label="韩星个人网站">
          <span className="brand-mark">HX</span>
          <span className="brand-name">韩星</span>
        </div>

        <nav className="main-nav" aria-label="主导航">
          {navItems.map((item, index) => (
            <span key={item} className={index === 0 ? 'nav-item active' : 'nav-item'}>
              {item}
            </span>
          ))}
        </nav>

        <div className="language-switch" aria-label="语言版本">
          <span className="selected">中文</span>
          <span className="divider">/</span>
          <span>EN</span>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="hello-line">你好，我是韩星</p>
          <h1 id="hero-title">
            把 AI 想法，
            <span>变成可落地的产品。</span>
          </h1>
          <div className="role-strip">
            <span>AI 产品经理方向</span>
            <i aria-hidden="true" />
            <span>AIGC 工作流</span>
            <i aria-hidden="true" />
            <span>视觉产品化</span>
          </div>
          <p className="hero-summary">
            我关注 AI 如何让内容生产更高效、更标准、更易复用。
            从真实场景出发，把模糊需求沉淀为工具、流程与组件。
          </p>
          <div className="hero-actions" aria-label="首版静态按钮">
            <span className="button button-primary">查看项目 <b aria-hidden="true">↗</b></span>
            <span className="button button-secondary">了解更多 <b aria-hidden="true">↓</b></span>
          </div>
          <p className="draft-note">首版框架 · 内容持续补充中</p>
        </div>

        <div className="hero-visual" aria-label="AI 产品工作台视觉区">
          <div className="visual-blob" aria-hidden="true" />
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <span className="spark spark-one" aria-hidden="true">✦</span>
          <span className="spark spark-two" aria-hidden="true">✧</span>

          <div className="sticky sticky-insight">
            <span className="sticky-dot" />
            <small>用户洞察</small>
            <strong>理解真实问题</strong>
          </div>
          <div className="sticky sticky-flow">
            <span className="flow-nodes" aria-hidden="true"><i /><i /><i /></span>
            <small>产品流程</small>
            <strong>拆解 · 设计 · 验证</strong>
          </div>
          <div className="sticky sticky-data">
            <span className="mini-chart" aria-hidden="true"><i /><i /><i /><i /></span>
            <small>验证结果</small>
            <strong>用反馈继续迭代</strong>
          </div>

          <Image
            className="hero-person"
            src="/images/hanxing-product-guide.png"
            width={936}
            height={1664}
            priority
            alt="韩星手持平板进行产品讲解的形象"
          />
        </div>
      </section>

      <section className="shortcut-grid" aria-label="网站内容框架">
        {shortcuts.map((item) => (
          <article key={item.title} className={`shortcut-card ${item.tone}`}>
            <span className="shortcut-portrait">
              <Image src={item.image} width={320} height={320} alt="" />
            </span>
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <span className="shortcut-arrow" aria-hidden="true">→</span>
          </article>
        ))}
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="section-kicker"><span>01</span> ABOUT ME</div>
        <div className="about-layout">
          <div className="about-heading">
            <p className="eyebrow">关于我</p>
            <h2 id="about-title">设计背景，让我看见体验；<br />AI 实践，让我把体验做成工具。</h2>
          </div>
          <div className="about-copy">
            <p>
              南京农业大学风景园林硕士，拥有设计、内容生产与 AI 工具实践的跨学科背景。
              我正在把对场景、视觉表达和技术实现的理解，转化为更易用、更可复用的 AI 产品。
            </p>
            <div className="about-facts" aria-label="个人背景标签">
              <span>风景园林硕士</span>
              <span>年级前 10%</span>
              <span>AI 提效实践</span>
              <span>设计 × 技术 × 场景</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section capability-section" id="capabilities" aria-labelledby="capability-title">
        <div className="section-kicker"><span>02</span> PRODUCT CAPABILITIES</div>
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">产品能力</p>
            <h2 id="capability-title">从问题到可复用方案的四步路径</h2>
          </div>
          <p className="section-intro">首版先展示目前已有证据，后续会补充更完整的需求文档、原型与验证过程。</p>
        </div>

        <div className="capability-board">
          <div className="ability-grid">
            {abilities.map((ability) => (
              <article className="ability-card" key={ability.number}>
                <span className="ability-number">{ability.number}</span>
                <h3>{ability.title}</h3>
                <p>{ability.description}</p>
                <div className="tag-row">
                  {ability.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
          <div className="capability-visual" aria-label="产品路线图形象">
            <div className="route-card route-card-top"><span />定义问题</div>
            <div className="route-card route-card-middle"><span />搭建方案</div>
            <div className="route-card route-card-bottom"><span />验证迭代</div>
            <Image src="/images/capability-roadmap.png" width={936} height={1664} alt="韩星展示产品路线图" />
          </div>
        </div>
      </section>

      <section className="section project-section" id="projects" aria-labelledby="project-title">
        <div className="section-kicker"><span>03</span> SELECTED AI PROJECTS</div>
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">AI 项目</p>
            <h2 id="project-title">先讲问题与方案，再展示视觉结果</h2>
          </div>
          <p className="section-intro">案例仍会继续补充用户、目标、决策与结果口径；当前版本用于建立作品集叙事框架。</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-cover">
                <Image src={project.image} fill sizes="(max-width: 800px) 100vw, 50vw" alt={`${project.title}作品集页面`} />
                <span className="project-index">{project.number}</span>
                <span className="project-category">{project.category}</span>
              </div>
              <div className="project-body">
                <p className="project-role">{project.role}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row project-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <span className="case-status">案例内容持续完善中 <b aria-hidden="true">→</b></span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience" aria-labelledby="experience-title">
        <div className="section-kicker"><span>04</span> EXPERIENCE</div>
        <div className="experience-layout">
          <div className="experience-title-block">
            <p className="eyebrow">经历轨迹</p>
            <h2 id="experience-title">从空间设计与内容生产，走向 AI 工具与产品化。</h2>
            <p>这条路径不传统，但让我习惯在复杂约束中理解场景、组织信息并推动方案落地。</p>
          </div>
          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-item" key={experience.date}>
                <span className="timeline-dot" />
                <time>{experience.date}</time>
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-decoration" aria-hidden="true"><i /><i /><i /></div>
        <p className="eyebrow">保持联系</p>
        <h2 id="contact-title">如果你也在探索 AI 怎样真正进入业务流程，欢迎认识我。</h2>
        <p>目前网站处于首版搭建阶段，简历、项目细节与英文版本会持续补齐。</p>
        <span className="email-chip">hanfeiqing@outlook.com</span>
      </section>

      <footer className="footer">
        <span>© 2026 韩星 · AI 产品经理方向</span>
        <span>中文版本 V0.1 · EN 目录已预留</span>
      </footer>
    </main>
  );
}
