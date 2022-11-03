export function LeftsideIcon({img, title}: any){
    return (
        <div className="home__leftside--user">
            <a className="user__link">
                <div className="user__container">
                    <div className="user__container--icon">
                        <img className="x1b0d499 xl1xv1r" src={img} style={{height:"36px", width: "36px"}} alt=""/>
                    </div>
                    <div className="user__container--name">
                        <div className="">
                            <div className="user__name--flexcontainer">
                                <div className="user__name">
                                    <span className="user__name--spancontainer">
                                        <span>
                                            {title}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}