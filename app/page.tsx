import Image from 'next/image';
import MobileMenu from './mobile-menu';

const navItems = [
  { label: '首页', href: '#top' },
  { label: '关于我', href: '#about' },
  { label: '产品能力', href: '#capabilities' },
  { label: 'AI 项目', href: '#projects' },
  { label: 'AIGC 作品', href: '#design' },
  { label: '联系我', href: '#contact' },
];

const aigcPortfolioUrl = 'https://www.kdocs.cn/l/cdlXGnSGnEiK';
const recruitmentProjectUrl = 'https://hanfeiqing-code.github.io/Autumn-Recruitment/';

const shortcuts = [
  { icon: 'icon-about', title: 'About me', description: '进一步了解我和我的成长历程。', tone: 'clay', href: '#about' },
  { icon: 'icon-skills', title: 'Skills', description: '我使用的技术和工具。', tone: 'olive', href: '#capabilities' },
  { icon: 'icon-projects', title: 'Projects', description: '探索我最新的项目与案例研究。', tone: 'amber', href: '#projects' },
  { icon: 'icon-blog', title: 'Design', description: '展示部分 AIGC 设计与视觉作品。', tone: 'teal', href: '#design' },
  { icon: 'icon-contact', title: 'Contact', description: '期待与你联系，一起创造精彩成果。', tone: 'sand', href: '#contact' },
];

const abilities = [
  {
    number: '01',
    title: '需求拆解与产品定位',
    description: '从用户、业务与真实使用场景出发，结合竞品与市场机会拆解目标、边界、优先级与成功标准。',
    tags: ['用户洞察', '竞品分析', '产品定位'],
  },
  {
    number: '02',
    title: 'PRD、原型与交互流程',
    description: '把产品目标转成功能边界、PRD、原型与异常流程，和开发、测试、运营、设计协作落地。',
    tags: ['PRD', '原型交互', '异常流程'],
  },
  {
    number: '03',
    title: '原型与技术协作',
    description: '使用 PRD、网页工具、ComfyUI、Coze、Python 与 AI 编程工具快速验证产品方案。',
    tags: ['PRD / 原型', 'ComfyUI', 'Skill / 网页工具'],
  },
  {
    number: '04',
    title: 'AI 方案、指标与上线回归',
    description: '用 RAG、Agent、ASR、TTS、离线样例、失败分类与人工在环，让 AI 功能从能演示走向可验证。',
    tags: ['AI 链路', '指标设计', '上线回归'],
  },
];

const profileEvidence = [
  {
    label: '产品策划',
    title: '从机会判断走到上线回归',
    description: '结合竞品、用户痛点与业务目标，完成产品定位、PRD、原型、指标设计与上线回归。',
  },
  {
    label: '业务与内容',
    title: '把重复工作组织成流程',
    description: '围绕动画、招聘、搜索与电商场景，拆解输入、节点、质检、失败重写与交付。',
  },
  {
    label: '视觉与资产',
    title: '把一次输出沉淀为标准',
    description: '通过视觉规范、LoRA、组件库与知识库资产，提升一致性、可控性与复用效率。',
  },
];

const projects = [
  {
    number: '01',
    category: 'AI 内容生产',
    title: '适趣环球 AI 英语动画工具链',
    problem: '分级动画对词汇覆盖、对白自然度、画面可理解性与时长都有明确要求，人工反复修改成本高。',
    solution: '将质量要求拆成 Prompt 规则与验收标准，搭建词汇覆盖检测、故事生产、故事板 3 类网页工具，并串联生成→审核→重写。',
    output: '沉淀 4 类可复用知识库与 Skill，已进入真实制作流程；失败样例会回流到上游规则。',
    role: 'AI 提效实习 · 产品 / 工作流设计',
    image: '/projects/study-workflow.webp',
    tags: ['Prompt 规则', 'Skill', '人工在环'],
  },
  {
    number: '02',
    category: 'AI 应用',
    title: '车载智能影音搜索',
    problem: '车内场景下用户希望用自然语言快速找到内容，搜索、澄清、播放与异常需要形成闭环。',
    solution: '设计语音优先链路：ASR → 意图识别与槽位补全 → RAG 检索重排 → Agent 工具调用与播放 → TTS。',
    output: '覆盖搜索、澄清、播放与异常场景，并预留任务成功率、检索命中率、时延等验证指标。',
    role: '产品负责人 · AI 应用方案',
    image: '/projects/comfyui-nodes.webp',
    tags: ['ASR / TTS', 'RAG', 'Agent'],
  },
  {
    number: '03',
    category: 'AI 工具',
    title: 'Autumn Recruitment 招聘检索平台',
    problem: '多份招聘表字段不统一，岗位检索、收藏与投递跟踪分散，难以快速比较机会。',
    solution: '统一 7 份招聘表为 8,059 条招聘记录，设计地区、行业、专业、批次等组合筛选与收藏 / 投递状态。',
    output: '完成检索平台上线，支持从筛选到投递入口的完整路径；点击图片可直接打开在线产品。',
    role: '产品负责人 · 信息架构与交互',
    image: '/projects/autumn-recruitment-dashboard.webp',
    href: recruitmentProjectUrl,
    tags: ['字段设计', '组合筛选', '上线验证'],
  },
  {
    number: '04',
    category: 'AI 工具',
    title: 'ComfyUI 自定义节点产品',
    problem: 'AI 图像调节需跨软件反复导入，中文提示词存在翻译与质量词门槛。',
    solution: '设计图像调节节点与中文翻译 / 质量增强节点，明确参数、开关、默认值与异常保护。',
    output: '形成 PRD、功能清单、交互逻辑、代码实现与使用说明，节点可嵌入现有工作流。',
    role: '独立产品与开发',
    image: '/projects/comfyui-nodes.webp',
    tags: ['ComfyUI', 'Python', '节点产品'],
  },
  {
    number: '05',
    category: '生产系统',
    title: 'SafeMeal 电商 AI 视觉系统',
    problem: '小型商家设计资源有限，大促物料量大且风格容易漂移。',
    solution: '构建“策略分析 → 提示词 → 批量生成 → 精修 → 质检”的 AI 视觉生产系统。',
    output: '交付 KV、海报、专题页与视觉规范；作品集复盘口径：单件素材约 4–6 小时降至约 1 小时。',
    role: '产品与设计负责人',
    image: '/projects/safemeal-system.webp',
    tags: ['竞品分析', 'ComfyUI', '视觉规范'],
  },
  {
    number: '06',
    category: '数字资产',
    title: '“小莓”品牌 IP 资产系统',
    problem: '区域农产品宣传同质化，外包成本高，IP 资产难以持续复用。',
    solution: '从用户与商业洞察、概念解耦到 LoRA 训练，搭建可扩展的 IP 资产系统。',
    output: '形成产品策略、训练方案、三视图、表情 / 动作 / 周边资产及商业化路径。',
    role: '产品与设计负责人',
    image: '/projects/xiaomei-ip.webp',
    tags: ['IP 产品化', 'LoRA', '资产体系'],
  },
];

const designWorks = [
  {
    category: '海报与活动视觉',
    title: '夏日演唱会 × 龙泉青瓷',
    description: '以主题拆解、提示词与后期精修，完成两种差异明显的视觉语气。',
    image: '/design/posters.webp',
    tools: ['Midjourney', 'ComfyUI', 'Photoshop'],
  },
  {
    category: 'KV 与产品控制',
    title: '科技主 KV × ControlNet 产品图',
    description: '在保留产品主体与品牌信息的前提下，控制背景生成与系列一致性。',
    image: '/design/kv-control.webp',
    tools: ['WebUI', 'ControlNet', 'KV'],
  },
  {
    category: 'AI 摄影探索',
    title: '产品摄影与主题人物影像',
    description: '覆盖商品与多风格人物影像，用不同模型验证表现边界与交付质量。',
    image: '/design/ai-photography.webp',
    tools: ['Midjourney', 'Stable Diffusion', 'Prompt'],
  },
  {
    category: '工作流与动态内容',
    title: 'ComfyUI 工作流 × AI 视频',
    description: '从产品精修、线稿转效果图到品牌短片，探索静态与动态内容衔接。',
    image: '/design/workflow-video.webp',
    tools: ['ComfyUI', 'Runway', 'Video'],
  },
];

export default function Home() {
  return (
    <main className="site-shell" id="top">
      <header className="topbar">
        <div className="brand" aria-label="韩星个人网站">
          <span className="brand-mark">HX</span>
          <span className="brand-name">韩星</span>
        </div>

        <nav className="main-nav" aria-label="主导航">
          {navItems.map((item, index) => (
            <a key={item.label} href={item.href} className={index === 0 ? 'nav-item active' : 'nav-item'}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="topbar-actions">
          <div className="language-switch" aria-label="语言版本">
            <span className="selected">中文</span>
            <span className="divider">/</span>
            <span>EN</span>
          </div>

          <MobileMenu items={navItems} />
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="hello-line">你好，我是韩星</p>
          <h1 id="hero-title">
            把 AI 想法，
            <span>变成可落地的产品</span>
          </h1>
          <div className="role-strip">
            <span>AI 产品经理</span>
            <i aria-hidden="true" />
            <span>产品策划</span>
            <i aria-hidden="true" />
            <span>AIGC 工作流</span>
            <i aria-hidden="true" />
            <span>视觉产品化</span>
          </div>
          <p className="hero-summary">
            我从机会判断、竞品分析与需求拆解出发，定义产品定位、PRD 与交互流程；
            再把 RAG、Agent、ASR 到 TTS 链路做成可验证、可复用的产品方案。
          </p>
          <div className="hero-actions" aria-label="首屏操作">
            <a className="button button-primary" href="#projects">查看项目 <b aria-hidden="true">↗</b></a>
            <a className="button button-secondary" href="/resume-2026-09-16.docx" download>下载简历 <b aria-hidden="true">↓</b></a>
          </div>
        </div>

        <div className="hero-visual" aria-label="韩星在 AI 产品工作台前的 IP 插画场景">
          {/* 主图已合成为完整场景，不再额外叠加色块、边框或装饰。 */}
          <div className="hero-scene-art">
            <Image
              className="hero-scene-image"
              src="/images/hanxing-hero-cutout-v5.png"
              fill
              priority
              style={{ objectFit: "contain", objectPosition: "52% 100%" }}
              sizes="(max-width: 800px) 100vw, (max-width: 1439px) 820px, 1000px"
              alt="韩星坐在产品工作台前，周围有电脑、书籍、咖啡杯、绿植与便签墙"
            />
          </div>
        </div>
      </section>

      <section className="shortcut-grid" aria-label="网站内容框架">
        {shortcuts.map((item) => (
          <a
            key={item.title}
            className={`shortcut-card ${item.tone}`}
            href={item.href}
            aria-label={`前往 ${item.title} 章节`}
          >
            <span className={`shortcut-reference-icon ${item.icon}`} aria-hidden="true" />
            <div className="shortcut-copy">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <span className="shortcut-arrow" aria-hidden="true">→</span>
          </a>
        ))}
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="section-kicker"><span>01</span> ABOUT ME</div>
        <div className="about-layout">
          <div className="about-heading">
            <p className="eyebrow">关于我</p>
            <h2 id="about-title">从设计与真实场景出发，<br />做能落地的 AI 产品。</h2>
          </div>
          <div className="about-copy">
            <p>
              南京农业大学（211）风景园林硕士，加权成绩 90.92、年级前 10%。
              我拥有设计、内容运营、项目策划与 AI 工具实践的跨学科背景，关注怎样把真实场景中的问题，
              转化为有定位、有交互、有验证、可复用的产品方案。
            </p>
            <div className="about-facts" aria-label="个人背景标签">
              <span>风景园林硕士（211）</span>
              <span>加权 90.92 · 年级前 10%</span>
              <span>AI 产品经理 / 产品策划</span>
              <span>竞品分析 · PRD · 原型</span>
            </div>
          </div>
          <div className="about-proof-grid" aria-label="跨学科能力证据">
            {profileEvidence.map((item) => (
              <article className="about-proof-card" key={item.label}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section capability-section" id="capabilities" aria-labelledby="capability-title">
        <div className="section-kicker"><span>02</span> SKILLS</div>
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">产品能力</p>
            <h2 id="capability-title">把产品策划与 AI 能力落到同一条路径</h2>
          </div>
          <p className="section-intro">从机会判断、产品定位到 PRD、原型、AI 链路与上线回归，保持产品策划视角，也能和技术一起把方案做出来。</p>
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
            <div className="route-card route-card-top"><span />判断机会</div>
            <div className="route-card route-card-middle"><span />定义方案</div>
            <div className="route-card route-card-bottom"><span />验证上线</div>
            <Image
              src="/images/capability-roadmap.png"
              width={936}
              height={1664}
              sizes="(max-width: 520px) 88vw, (max-width: 1080px) 55vw, 460px"
              alt="韩星展示产品路线图"
            />
          </div>
        </div>
      </section>

      <section className="section project-section" id="projects" aria-labelledby="project-title">
        <div className="section-kicker"><span>03</span> PROJECTS</div>
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">AI 项目</p>
            <h2 id="project-title">从真实问题出发，把 AI 能力组织成可复用产品</h2>
          </div>
          <p className="section-intro">案例优先呈现场景、问题、产品动作与产出价值；真实用户数据和外部验证仍会继续补充。</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => {
            const cover = (
              <div className="project-cover">
                <Image
                  src={project.image}
                  fill
                  sizes="(max-width: 800px) 100vw, (max-width: 1700px) 50vw, 800px"
                  alt={`${project.title}作品集页面`}
                />
                <span className="project-index">{project.number}</span>
                <span className="project-category">{project.category}</span>
                {project.href && <span className="project-link-badge">打开在线产品 ↗</span>}
              </div>
            );

            return (
              <article className="project-card" key={project.number}>
                {project.href ? (
                  <a
                    className="project-cover-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`打开${project.title}在线产品`}
                  >
                    {cover}
                  </a>
                ) : cover}
                <div className="project-body">
                  <p className="project-role">{project.role}</p>
                  <h3>{project.title}</h3>
                  <div className="project-evidence">
                    <p><span>问题</span>{project.problem}</p>
                    <p><span>方案</span>{project.solution}</p>
                    <p><span>产出</span>{project.output}</p>
                  </div>
                  <div className="tag-row project-tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <span className="case-status">
                    {project.href ? '点击图片打开在线产品' : '案例详情持续补充中'} <b aria-hidden="true">→</b>
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section design-section" id="design" aria-labelledby="design-title">
        <div className="section-kicker"><span>04</span> DESIGN</div>
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">AIGC 设计作品</p>
            <h2 id="design-title">视觉能力，是我理解生成质量与交付标准的一手经验</h2>
          </div>
          <p className="section-intro">这里不是求职主线，而是我做 AI 产品时理解模型效果、工作流约束与最终交付的重要基础。</p>
        </div>

        <div className="design-grid">
          {designWorks.map((work) => (
            <article className="design-card" key={work.title}>
              <a
                className="design-cover-link"
                href={aigcPortfolioUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`打开 AIGC 作品集：${work.title}`}
              >
                <div className="design-cover">
                  <Image
                    src={work.image}
                    fill
                    sizes="(max-width: 800px) 100vw, (max-width: 1700px) 50vw, 800px"
                    alt={`${work.title}作品集预览`}
                  />
                  <span className="design-link-badge">打开 AIGC 作品集 ↗</span>
                </div>
              </a>
              <div className="design-body">
                <p className="design-category">{work.category}</p>
                <h3>{work.title}</h3>
                <p>{work.description}</p>
                <div className="design-tools">
                  {work.tools.map((tool) => <span key={tool}>{tool}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-area" id="contact" aria-labelledby="contact-title">
        <div className="section-kicker"><span>05</span> CONTACT</div>
        <div className="contact-section">
          <div className="contact-decoration" aria-hidden="true"><i /><i /><i /></div>
          <p className="eyebrow">保持联系</p>
          <h2 id="contact-title">寻找能把 AI 能力真正放进业务流程的产品策划机会。</h2>
          <p>目前重点关注 AI 产品经理、产品策划、AI 应用与内容生产提效方向；简历与案例细节仍会继续更新。</p>
          <div className="contact-chips" aria-label="联系与求职方向">
            <a className="email-chip" href="mailto:hanfeiqing@outlook.com">hanfeiqing@outlook.com</a>
            <span className="direction-chip">目标岗位：AI 产品经理 / 产品策划</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 韩星 · AI 产品经理方向</span>
        <span>中文版本 V0.2 · EN 目录已预留</span>
      </footer>
    </main>
  );
}
