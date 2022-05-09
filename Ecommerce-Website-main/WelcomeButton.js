class WelcomeBack extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'World',
            apppVersion: '1'
        }
    }

    render(){
        return(
            <>
                <h2>Hello {this.state.name || 'Friend'}! EXP</h2>
                {
                    this.state.apppVersion && this.state.apppVersion < 2
                    ? <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui est amet
                    culpa eveniet! Temporibus commodi dolor ad molestias cumque tenetur
                    perspiciatis eum distinctio amet, ex obcaecati nesciunt magnam autem
                    cupiditate rem adipisci blanditiis voluptates!</p>
                    : ''
                }
                <CoolButton customText={this.state.apppVersion && this.state.apppVersion < 2 ? 'Web Programming' : 'Download'} />
            </>
        )
    }


}
