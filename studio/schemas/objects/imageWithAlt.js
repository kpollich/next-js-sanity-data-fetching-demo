export default {
  name: "imageWithAlt",
  title: "Image With Alt Text",
  type: "image",
  options: { hotspot: true },
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      description: "Important for SEO and accessiblity.",
      options: {
        isHighlighted: true,
      },
    },
  ],
};
