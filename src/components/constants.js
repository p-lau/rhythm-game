const PROFILES = [
    {
        id: 'calemdar',
        name: 'Cem Alemdar',
        image: '/media/images/profile/ca.jpg',
        text: 'Team Lead, Web Developer, Audiovisual Programmer',
        external: true,
        link: 'https://calemdar.github.io/'
    },
    {
        id: 'plau',
        name: 'Panhavuth Lau',
        image: '/media/images/profile/pl.jpg',
        text: 'Web Developer, Sound Engineer, Audiovisual Programmer',
        external: false,
        link: '/about'
    },
    {
        id: 'sliu',
        name: 'Shiyi Liu',
        image: '/media/images/profile/default.png',
        text: 'Tech Artist, Interactive Designer, Sound Engineer',
        external: false,
        link: '/about'
    },
    {
        id: 'slove',
        name: 'Sarah Love',
        image: '/media/images/profile/sml.jpg',
        text: 'Character Artist, Sound Engineer',
        external: false,
        link: '/about/slove',
        gifs: ["/media/images/development/OTTER_move_preview.gif", "/media/images/development/OTTER_attack_preview.gif", "/media/images/development/SNAKEBITE_preview.gif", "/media/images/development/SNAKESLITHER_preview.gif"]
    },
    {
        id: 'gtaylor',
        name: 'Gavin Taylor',
        image: '/media/images/profile/default.png',
        text: 'Environmental Artist, Game Designer',
        external: false,
        link: '/about/gtaylor'
    },
    {
        id: 'atian',
        name: 'Alex Tian',
        image: '/media/images/profile/default.png',
        text: 'Lead Developer, Gameplay Programmer',
        external: false,
        link: '/about'
    }
];

const POSTS = [
    {
        post: 'team-document',
        image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Team Document',
        description: 'Our team document',
        date: '2020-03-29'
    },
    {
        post: 'game-treatment',
        image: 'https://images.pexels.com/photos/164168/pexels-photo-164168.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        title: 'Game Treatment',
        description: 'Our game treatment',
        date: '2020-04-03'
    },
    {
        post: 'development-blog-1',
        image: 'https://images.pexels.com/photos/34123/pexels-photo.jpg?cs=srgb&dl=iphone-notebook-pen-working-34123.jpg&fm=jpg',
        title: 'Dev Blog: The Beginning',
        description: 'Our first development blog post',
        date: '2020-04-14'
    },
    {
        post: 'development-blog-2',
        image: 'https://images.pexels.com/photos/1181618/pexels-photo-1181618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Dev Blog: The Presentation',
        description: 'Our second development blog post',
        date: '2020-04-24'
    },
    {
        post: 'development-blog-3',
        image: 'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Dev Blog: Playtesting',
        description: 'Our third development blog post',
        date: '2020-05-06'
    }
];

export { PROFILES, POSTS };