const PageTitle = ({ title }) => (
  <h1 className="text-6xl font-thin tracking-tight text-white">
    {title}
  </h1>
)

const SectionTitle = ({ title }) => (
  <h2 className="text-4xl font-thin tracking-wide text-white">
    {title}
  </h2>
)

const Heading = ({ heading }) => (
  <h3 className="text-2xl font-normal tracking-wide text-white">
    {heading}
  </h3>
)

const SubHeading = ({ heading }) => (
  <h4 className="text-xl font-normal tracking-wide text-white">
    {heading}
  </h4>
)

const Paragraph = ({ text }) => (
  <p className="text-md leading-relaxed text-white whitespace-pre-line">
    {text}
  </p>
)

const TextLink = ({ link, text }) => (
  <a
    href={link}
    className="text-cyan-500 font-semibold hover:text-cyan-400 hover:underline transition-colors"
  >
    {text}
  </a>
)

const Image = ({ src, alt = '' }) => (
  <img
    src={src}
    alt={alt}
    className="w-full h-auto rounded-lg"
  />
)

const CardImage = ({ src, alt = '' }) => (
  <img
    src={src}
    alt={alt}
    className="w-full h-48 object-cover rounded-t-xl"
  />
)

const CardTitle = ({ title }) => (
  <h4 className="text-xl font-semibold text-slate-900 dark:text-white tracking-wide">
    {title}
  </h4>
)

const CardParagraph = ({ text }) => (
  <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
    {text}
  </p>
)

const CardTextLink = ({ link, text }) => (
  <a
    href={link}
    className="text-tertiary font-semibold hover:text-blue-200 transition-colors"
  >
    {text}
  </a>
)

const Card = ({ image, title, text, link, linkTitle }) => (
  <div className="relative w-full max-w-sm overflow-hidden rounded-xl bg-primary shadow-md hover:shadow-xl transition-all hover:scale-105 duration-300 z-10">
    <CardImage src={image} alt={title} />
    <div className="p-6 flex flex-col gap-4 min-h-60">
      <div className="flex-grow space-y-4">
<       CardTitle title={title} />
        <CardParagraph text={text} />
      </div>
      <CardTextLink link={link} text={linkTitle} />
    </div>
  </div>
)

const IconButton = ({ icon, alt, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block">
    <img src={icon} alt={alt} className="w-3xs h-auto hover:scale-105 transition duration-300" />
  </a>
)


export {
  PageTitle,
  SectionTitle,
  Heading,
  SubHeading,
  Paragraph,
  TextLink,
  Image,
  Card,
  IconButton,
}
