import React from 'react';
import { connect } from 'react-redux';
 class ViewLinksThunk extends React.Component{

    componentWillMount(){
      const data=
        {
          "id": 6,
          "url": "https://authorizationt.iso.com/auth/global/resetPwdForward.do",
        };
       
        // fetch('http://localhost:57944/getAllProductIdAndTitleIAmRegisteredFor/CBCDC09EXEBFBX4CF1XBFFBX7C7920AB8B94').
        // then(response=>response).then(function(response){
        //     console.log("prod data", response.data);
        //     this.props.dispatch({type:"ADD",data:response.data})
        // })

       this.props.dispatch({type:'ADD',data:data});
    }
    renderTableData() {
        console.log("links: "+this.props.links);
        return this.props.links.map((link, index) => {
           console.log("sadasdas ",link.id);
           return (
              <ul><li>{link.url}</li></ul>
           )
        })
     }
  

    render(){
        return(
            <div>
            <table className="table">
                <th>
                    <td>Id</td>
                    <td>Url</td>
                </th>
                <tbody>
                <tr>
                    {this.renderTableData()}
                </tr>
                </tbody>
            </table>
        </div>
        );
    }
}

const mapsStateToProps=(state)=>({
    links:state.links
})

export default connect(mapsStateToProps)(ViewLinksThunk);