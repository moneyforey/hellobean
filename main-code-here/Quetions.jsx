import React, { useState } from 'react';
import InputDiv from './InputDiv';
import TrueFalseCont from '../try-hard/src/TrueFalseCont';

// const initProblem ={
// options:{
//     a:"hel",
//     b
// }
// }

const Qusetions = () => {
   // const [problem,setProblem] = useState(initProblem);
    // const {question,options} = problem;
   // const [ques,setQues] = useState(question);
    const [opt,setOpt] = useState(initProblem.options);
    

    const handleChange=(e)=>{
        const {name,value} = e.target;
         
          const newarray = [...opt];
          newarray[name] = value;
         
          setOpt(newarray);
        //   setProblem({
        //     ...problem,
        //     options:newarray
        //   })
    }

    // const quesChange=(e)=>{
    //      setQues(e.target.value);
    //      setProblem({
    //         ...problem,
    //         question:e.target.value
    //      })
    // }

    const handleClick=()=>{
        // console.log(problem);
        console.log(opt);
    }

    return (
        <div>
            {/* <div>
                <label htmlFor="">Ques no.</label>
                <input type="text" name='question' value={question} onChange={quesChange}  />
            </div> */}
            {
                 opt.map((res,ind)=>(
                    <InputDiv key={ind} res={res} req={ind} handleChange={handleChange}/>
                 ))
            } 
            <button onClick={handleClick}>Click</button>
        </div>
    );
};

export default Qusetions;