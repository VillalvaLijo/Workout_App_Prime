import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import {connect} from 'react-redux';

//this component will be a drop down menu of all user exercises that they can choose to 
//create an exercise set with.

class ExercisesDropDownMenu extends Component{

    state = {
        listOpen: false,
        headerTitle: 'Add New Exercise Set',
        keyword: '',
    };

    // static getDerviedStateFromProps(nextProps){
    //     const { list, title } = nextProps;

    //     const selectedItem = list.filter((item) => item.selected);

    //     if (selectedItem.length){
    //         return{
    //             headerTitle: selected[0].title,
    //         };
    //     }
    //     return { headerTitle: title};
    // }

    

    componentDidUpdate(){
        // const { listOpen } = this.state;
        const listOpen = this.state.listOpen;

        console.log("Inside componentDidUpdate, this.props.reduxStore.exercises",this.props.reduxStore.exercises);

        console.log("Inside componentDidUpdate on drop down menu compoent, listOpen:", listOpen);

        setTimeout(() => {
            if(listOpen){
                window.addEventListener('click', this.close);
            }else{
                window.removeEventListener('click', this.close);
            }
        }, 0);
    }

    componentWillUnmount(){
        window.removeEventListener('click', this.close);
    }

    // close() {
    //     this.setState({     //getting type error, need to bind this?
    //         listOpen: false,
    //     });
    // }  

    selectItem(name, id, user_id){
        //const { resetThenSet } = this.props;        //does this set the variable to props or does it grab the variable from props?

        const  selectedExercise ={
            id: id,
            user_id: user_id,
            name: name,
            exerciseSelected: true,
        }
        this.setState({
            //headerTitle: name,
            listOpen: false,
        }) //resetThenSet(id, stateKey));

        //write a dispatch to send selected exercise to selectedExerciseReducer so it can be accsesed
        //by the create set table component
        this.props.dispatch({       
            type: 'NEW_EXERCISE_SET',
            payload: selectedExercise,
        });  

        console.log("inside selectItem, selected Exercise is:", selectedExercise);
        return selectedExercise;
    }

    toggleList() {

        // console.log("Inside toggleList prevState", prevState); //prevState not defined
        this.setState((prevState) => ({
            listOpen: !prevState.listOpen,
            keyword: '',
        }), () => {
            if (this.state.listOpen){//  && //this.searchField.current){
                // this.searchField.current.focus();
                this.setState({
                    keyword: ''
                });
            }
        });
    }

    filterList(e){
        this.setState({
            keyword: e.target.value.toLowerCase(),
        });
    }

    //get exercises, send dispatch to saga and then get exercises from server
    getExercises(){
        console.log("inside get exercise in the drop down menu component, this.props.reduxStore.user.id", this.props.reduxStore.user.id);
        this.props.dispatch({       
            type: 'GET_EXERCISES',  
            payload: {
                user_id: this.props.reduxStore.user.id
            }
        });
    }
    
    listItems(){
        this.getExercises()
        const list = this.props.reduxStore.exercises; //reduxStore.exercises contains id of the exercise, user_id and the name of the exercise
        const { keyword } = this.state;

        let tempList = list; //list should be equal to reduxStore.exercises

        // if (keyword.length){        //if truthy...
        //     tempList = list
        //     .filter((item) => (
        //         item.name.toLowerCase().slice(0, keyword.length).includes(keyword)
        //     )).sort((a, b) => {         //sort through names in list, consider delete this, commenting it out if you can
        //         if(a.name<b.name){ return -1; }
        //         if(a.name > b.name){ return 1; }
        //         return 0;
        //     });
        // }
        // console.log("inside listItems function list: ",list);
        // console.log("inside ExerciseDrop down menu, listItems function, templist", tempList);
        if(tempList.length){  //if the list has items in it... do the rest
            return (
                tempList.map((item) => (
                    <button
                        type="button"
                        className="dd-list-item"
                        key={item.id}       //should select the exercises database id
                        onClick={()=> this.selectItem(item.name, item.id, item.user_id)}
                        >
                            {item.name}
                        </button>
                ))
            );

        }
        return <div className= "dd-list-item no-result"> </div> //{searchable[1]}</div>
    }

    //render function will display drop down menu
    render(){
        const {listOpen, headerTitle} = this.state;
        return(
            <div classname="dd-wrapper">
                <button
                    type="button"
                    classname="dd-header"
                    onClick={() => this.toggleList()}
                    >
                        <div className="dd-header-title">{headerTitle}</div>
                        {listOpen
                        ? <FontAwesome name ="angle-up" size = "2x"/>
                        : <FontAwesome name= "angle-down" size="2x" />
                        }
                    </button>
                    {listOpen && (
                        <div className="dd-scroll-list">
                        {this.listItems()}
                    </div>
                    )}
                    
            </div>
        );
    }

}

const mapStateToProps = (reduxStore) => ({ reduxStore })

export default connect(mapStateToProps) (ExercisesDropDownMenu);

