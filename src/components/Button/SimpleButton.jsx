const SimpleButton = ({ title , url }) => {
    return (
        <div>
            <a href={url}>
                <div class="rounded-lg text-sm px-4 py-2 bg-npm-blue hover:bg-npm-hover-blue focus:ring-4 focus:outline-none font-medium ease-in-out duration-300"> 
                    {title}
                </div>
            </a>
        </div>
    )

}

export default SimpleButton;