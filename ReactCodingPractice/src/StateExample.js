import React,{Component} from 'react';

export default class StateExample extends Component{

    constructor(){
        super();
        this.state={city:["chennai","Delhi", "Karnatka"]};
        var cityList=this.state.city;
        cityList.push("Bangalore");

        this.setState({city:cityList});

    }

    componentWillMount(){
        this.setState({city:["madurai","trichy","coimb"]})
    }

    componentDidMount(){
        this.setState({city:["1","2","3"]})
    }

    render(){
        return(
            <div>
                <section>
                    {this.state.city.map(
                        function (cityName){
                            return <li key={cityName}>{cityName}</li>
                        }
                    )}
                </section>
                </div>
        )
    }



}