export default function TableOfContents({ contents }) {
  return (
    <>
      <div>
        <h2 className="text-2xl w-full mt-8 mb-6 font-serif dark:text-gray-300 text-gray-700 italic">
          Table of Contents
        </h2>
        <div>
          <ol className="font-serif list-decimal px-6 text-lg">
            {contents.map((content) => (
              <li key={content.title}>
                <a href={content.href}>{content.title}</a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
