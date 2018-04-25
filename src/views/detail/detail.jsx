import React,{Component} from 'react'

class Detail extends Component{
    constructor() {
        super()
        this.state = {
            data: null
        }
    }
    render(){
        let {data} = this.state
        return (
          <div>
            <h1>detail</h1>
            {
                data && <div>
                    <p>{data.goods_id}</p><p>{data.goods_name}</p>
                </div>
            }
          </div>
        )
    }
    componentDidMount(){
        this.setState({
            data: this.props.location.state.data
        })
    }
}
export default Detail