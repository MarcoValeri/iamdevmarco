// const generateStaticParams = async () => {
//     const response = await fetch('https://.../api/posts?limit=10');
//     const recentTutorials = await response.json();
    
//     return recentTutorials.map((tutorial) => ({
//         slug: tutorial.slug,
//     }));
// }

// const getTutorialData = async (slug: string) => {
//     const response = await fetch(`https://api/tutorial/${slug}`);

//     if (!response.ok) return undefined;
//     return response.json();
// }

const Tutorial = async ({ params }: { params: { slug: string}}) => {
    const { slug } = params;
    console.log(`slug`);

    // const tutorial = await getTutorialData(slug);

    // if (!tutorial) {
    //     return (
    //         <div>
    //             <h1>Tutorial not found</h1>
    //         </div>
    //     )
    // }

    return (
        <div>
            <h2>Tutorial</h2>
        </div>
    )
}

export default Tutorial;