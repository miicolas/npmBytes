const Staff = () => {

    const staff = [
        {
            name: "Nicolas Becharat",
            image: "https://lh3.googleusercontent.com/drive-viewer/AITFw-z5CiX-NgSjDKLzHywd0uTLnwkkYFuh47AtLgRcHa0Yl2O5NZyu34L0aFe7XsjMcsT77u9gQzv1OJ27v6ev91t7ennD=s2560",
            link: "https://nicolas-becharat.com12"
        },
        {
            name: "Nicolas Becharat",
            image: "https://lh3.googleusercontent.com/drive-viewer/AITFw-z5CiX-NgSjDKLzHywd0uTLnwkkYFuh47AtLgRcHa0Yl2O5NZyu34L0aFe7XsjMcsT77u9gQzv1OJ27v6ev91t7ennD=s2560",
            link: "https://nicolas-becharat.com12"
        },
        {
            name: "Nicolas Becharat",
            image: "https://lh3.googleusercontent.com/drive-viewer/AITFw-z5CiX-NgSjDKLzHywd0uTLnwkkYFuh47AtLgRcHa0Yl2O5NZyu34L0aFe7XsjMcsT77u9gQzv1OJ27v6ev91t7ennD=s2560",
            link: "https://nicolas-becharat.com12"
        },
        {
            name: "Nicolas Becharat",
            image: "https://lh3.googleusercontent.com/drive-viewer/AITFw-z5CiX-NgSjDKLzHywd0uTLnwkkYFuh47AtLgRcHa0Yl2O5NZyu34L0aFe7XsjMcsT77u9gQzv1OJ27v6ev91t7ennD=s2560",
            link: "https://nicolas-becharat.com12"
        },
        
    ];

    return (
        <div>
            <div className="flex gap-x-10">
                {staff.map((member) => (
                    <div className="flex flex-col items-center gap-y-4 p-5" key={member.name}>
                        <div className="bg-white rounded-full flex justify-center items-center w-44">
                            <img src={member.image} alt="PP" />
                        </div>
                        <a href={member.link}>{member.name}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}
    
export default Staff;
