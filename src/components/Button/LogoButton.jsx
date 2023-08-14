const LogoButton = ({ title , url }) => {
    return (
        <div>
            <a href={url}>
                <div class="flex gap-2 rounded-lg text-sm px-4 py-2 bg-npm-blue hover:bg-npm-hover-blue focus:ring-4 focus:outline-none font-medium ease-in-out duration-300"> 
                    <p>{title}</p>


                </div>
            </a>
        </div>
    )

}

export default LogoButton;