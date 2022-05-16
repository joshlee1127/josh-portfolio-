export default {
    name: "testimonials",
    title: "Testimonials",
    type: "document",
    fields: [
        { name: "name", title: "name", type: "string" },
        { name: "company", title: "Company", type: "string" },
        {
            name: "imageurl",
            title: "ImgUrl",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "feedback",
            title: "Feedback",
            type: "string",
        },
    ],
}
