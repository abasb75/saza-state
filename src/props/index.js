class PropsStore {
    props = {};

    addProps(props){
        this.props = {
            ...this.props,
            ...props,
        }
    }

    getProps(selector){
        if(typeof selector !== 'function'){
            return this.props;
        }
        return selector(this.props);
    }

}

const props = new PropsStore();

const addSazaProps = props.addProps.bind(props);
const getSazaProps = props.getProps.bind(props);

export {addSazaProps , getSazaProps };