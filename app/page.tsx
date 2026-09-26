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

const experiences = [
  {
    period: '2026.06—至今',
    company: '北京智乐活科技有限公司',
    role: 'AI提效部门实习',
    summary: '把儿童分级学习要求转成可执行的 AI 生产规则，推动工具化交付。',
    details: [
      '负责“适趣环球AI英语动画”分级动画剧本与分镜的AI自动化生产，将儿童分级学习要求转为可执行的Prompt规则与内容验收标准，以每组4个目标词、6篇短剧本组织批量生成。',
      '设计并整合词汇覆盖检测、故事生产、故事板3类网页工具，封装为剧本生产Skill，把个人经验固化为团队可调用的能力。',
      '沉淀角色、反转机制、案例、趣味细节4类可复用知识资产，作为生成时的上下文供给，替代每次重新描述角色与规则。',
      '对比成稿词频、对白自然度、画面可懂性与单集时长，定位“词频达标但表达生硬”“镜头压缩”等失败模式；调整故事与语言设计分工、修订规则并设置上游重写路径，建立“生成→审核→重写”人工在环流程，内容经审核后交付动画生产组，已投入实际制作。',
    ],
  },
  {
    period: '2025.11—2026.06',
    company: '南京滨江公园管理有限公司',
    role: '研究生校外实践',
    summary: '负责左岸花海景观方案从设计到养护的完整落地，练习用约束条件做方案与交付。',
    details: [
      '负责左岸花海景观方案设计与落地，覆盖“方案—采购—施工—养护—科普”全流程；针对76个花池、109种花海适用植物，按花期衔接、群落层次与观赏动线完成品种筛选与平面配植，输出配植图与种植说明。',
      '设计低成本配植策略，以“低管养”为目标做品种比选与用量测算，用宿根花卉、乡土植物替代高成本时令花坛。',
      '驻场跟进放线、整地、种植与验收，沉淀《左岸花海养护操作手册》《左岸花海植物品种库》等可复用资料。',
    ],
  },
  {
    period: '2024.04—2026.05',
    company: '南京农业大学规划设计研究院',
    role: '项目策划与核心成员',
    summary: '在多场景规划项目中完成调研、需求梳理、方案汇报与现场协作，把多方诉求整理成可执行任务。',
    details: [
      '作为核心成员参与8项乡村更新、产业规划与人居环境设计项目，承担政府单位对接、实地调研与方案汇报。',
      '完成现场踏勘、村民访谈与基础资料收集，将多方诉求整理为可执行的规划条件与设计任务书。',
      '参与图纸绘制与成果编制，按规划、设计、施工不同阶段输出图件与文本，配合完成多轮方案汇报与修改。',
      '参与乡村改造与产业规划类项目：安徽泗县曙光村改造、溧阳市乡村产业发展规划、常州市设施大棚与看护房整治提升、古县街道产业规划。',
      '参与景观与设施设计类项目：甘泉湖研学草莓园规划设计、五桥板块高标准农田大地艺术设计与施工、溧阳市百家塘玉米迷宫设计、张圩社区微绿地改造。',
      '覆盖从概念方案、施工图到现场配合的完整流程，积累乡村、农田、研学园区、社区绿地等多场景设计经验。',
    ],
  },
  {
    period: '2024.09—2025.03',
    company: '南京绘梦起航科技培训有限公司',
    role: '风景园林考研讲师',
    summary: '把复杂知识拆成可复用的课程结构，持续用反馈迭代交付方式。',
    details: [
      '负责风景园林考研专业课程的授课与教研，梳理考点体系与知识框架，独立完成全套课程资料的编写与迭代。',
      '搭建标准化授课体系，明确各阶段教学目标、课时安排与练习配置，形成可复用的课程模板。',
      '承担课程组织与教学交付，完成作业与考卷批改、学习进度跟进与答疑，根据学生反馈调整讲解重点。',
    ],
  },
  {
    period: '2024.04—2024.09',
    company: 'Chill trip南京地陪项目',
    role: '小红书运营策划',
    summary: '串联内容种草、私域承接与线下服务，验证从内容到业务交付的完整链路。',
    details: [
      '负责小红书账号内容策划与选题，结合南京本地景点与出行场景输出图文内容，把控标题、封面与发布节奏。',
      '运营私域社群，承接内容带来的咨询并维护用户关系，提升复访与转介绍。',
      '提供定制化旅行方案及线下接待客户，串联“内容种草—私域承接—线下服务”链路，衔接线上内容与线下交付。',
      '拓展外部商家合作，对接民宿、包车服务等本地供给方，建立合作与结算方式，沉淀可复用的商家资源。',
    ],
  },
  {
    period: '2024.04—2024.07',
    company: '南京幻想家剧本杀店',
    role: 'DM：剧本杀主持人、剧本杀情节演绎者',
    summary: '通过现场主持、角色演绎与节奏控制，训练故事结构、用户观察与现场应变能力。',
    details: [
      '负责剧本杀流程主持、角色演绎、线索推进与现场秩序控制，根据玩家反馈调整节奏与引导方式。',
    ],
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
    image: '/projects/ai-english-workbench.png',
    href: 'https://hanfeiqing-code.github.io/reversal-comedy-workbench/',
    tags: ['Prompt 规则', 'Skill', '人工在环'],
  },
  {
    number: '02',
    category: '产品策划 · 微信小程序',
    title: '晚餐随心选项目',
    problem: '双人晚餐决策反复确认、意见难统一；绑定与隐私数据需隔离，断网、解绑、版本升级等异常容易导致状态不一致。',
    solution: '以微信小程序为载体，设计云端数据存储、一对一绑定与私密同步机制，并补充异常状态恢复策略，覆盖从产品定义、交互设计到体验版交付。',
    output: '完成体验版上传与云端部署，并对绑定、菜单快照与店铺持久化开展回归验证，形成完整交付闭环。',
    role: '产品策划 · 独立项目',
    image: '/projects/dinner-choice.png',
    href: 'https://hanfeiqing-code.github.io/xiaomiao-menu-showcase/',
    tags: ['微信小程序', '云端部署', '状态恢复'],
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
            学习能力强、能抗压且适应快。从风景园林到内容运营再到 AI 工具落地，多条业务线都能独立交付；
            擅长把模糊需求拆成可执行规则并沉淀为团队可复用工具；关注 AI 产品趋势，能独立思考 AI 如何让产品变得更好。
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
          <div className="experience-block" id="experience" aria-labelledby="experience-title">
            <div className="section-heading-row">
              <div>
                <p className="eyebrow">实习与实践</p>
                <h2 id="experience-title">把真实场景里的问题，做成可交付的产品与项目。</h2>
              </div>
              <p className="section-intro">点击每段经历查看详细内容。每一次实践都在训练同一件事：从复杂现场提炼目标、流程与可复用的方法。</p>
            </div>

            <div className="experience-list" aria-label="实习与实践经历">
              {experiences.map((experience, index) => (
                <details className="experience-item" key={`${experience.period}-${experience.company}`} open={index === 0}>
                  <summary className="experience-summary">
                    <span className="experience-index">{String(index + 1).padStart(2, '0')}</span>
                    <span className="experience-meta">
                      <span className="experience-period">{experience.period}</span>
                      <strong>{experience.company}</strong>
                      <em>{experience.role}</em>
                    </span>
                    <span className="experience-toggle" aria-hidden="true">↘</span>
                  </summary>
                  <div className="experience-details">
                    <p className="experience-summary-copy">{experience.summary}</p>
                    <ul>
                      {experience.details.map((detail) => <li key={detail}>{detail}</li>)}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
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
            const cover = project.image ? (
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
            ) : null;

            return (
              <article className="project-card" key={project.number}>
                {project.href && cover ? (
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
                <div className={`project-body${cover ? '' : ' project-body-no-cover'}`}>
                  {!cover && <div className="project-text-mark"><span>{project.number}</span><span>{project.category}</span></div>}
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
