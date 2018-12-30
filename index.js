new Docute({
    target: '#docute',
    plugins: [
        docuteKatex(),
        docuteMermaid()
    ],
    sourcePath: "https://tonykero-pages-cdn.surge.sh",
    nav: [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "GitHub",
            link: "https://github.com/tonykero"
        }
    ],
    sidebar: [
        {
            title: "About",
            links: [
                {
                    title: "Thoses pages",
                    link: "/about"
                },
                {
                    title: "GitHub",
                    link: "/github"
                }
            ]
        },
        {
            title: "Projects",
            links: [
                {
                    title: "Status",
                    link: "/projects/status"
                },
                {
                    title: "Compote",
                    link: "/projects/compote"
                },
                {
                    title: "Moe 2.0",
                    link: "/projects/moe"
                },
                {
                    title: "p2p",
                    link: "/projects/p2p"
                }
            ]
        }
    ]
})