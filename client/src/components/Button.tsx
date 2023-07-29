type Props={ //tipagem typescript
    children:React.ReactNode,
    clicked:()=>void,
  }
  
function Button(props:Props) {
    return (
      <button onClick={props.clicked}>{props.children}</button>
      
    )
  }

  export {Button}
