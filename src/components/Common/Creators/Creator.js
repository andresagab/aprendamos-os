import React from "react";

class Creator extends React.Component {

    render() {

        return (

            <div className="flex flex-col items-center justify-center">
                <img src={require('./../../../assets/img/everyone/' + this.props.creator.avatar).default} className="w-20 h-20 object-cover rounded-full" alt="creator.name" />
                {/*<img src={process.env.PUBLIC_URL + require('./../../../assets/img/everyone/' + this.props.creator.avatar).default} className="w-20 h-20 object-cover rounded-full" alt="creator.name" />*/}
                <h3 className="font-semibold text-md pt-4">{ this.props.creator.name }</h3>
                <div className="flex flex-col items-center space-y-0">
                    <span className="font-normal text-xs">{ this.props.creator.role }</span>
                    <span className="font-normal text-xs">{ this.props.creator.contact }</span>
                </div>
            </div>
            
        )

    }

}

export default Creator;