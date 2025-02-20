import { useMatches } from "react-router-dom";

export function Breadcrumbs() {
    let matches = useMatches();
    let crumbs = matches
      // first get rid of any matches that don't have handle and crumb
      .filter((match) => 
        {
        const handle = match.handle as any;
        return Boolean(handle?.crumb);
        }
      )
      // now map them into an array of elements, passing the loader
      // data to each one
      .map((match:any) => match.handle.crumb(match.params));
  
    return (
        <ol className="breadcrumb float-sm-right" style={{lineHeight:"38px"}}>
              {crumbs.map((crumb, index) => (
          <li className={"breadcrumb-item " + ((crumbs.length-1) == index ? "active" : "")} key={index}>{crumb}</li>
        ))}
            </ol>
    );
  }