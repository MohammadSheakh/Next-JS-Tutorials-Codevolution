// it will match any url  that contains docs segment in url if file name is [...params].js

// ei ta documentation site er jonno onek important ..
// ekhon route er /doc/first/concept/example .. ei tar different segment amader ke catch
// korte hobe ..

// catch all routes er jonno [[...params]].js evabe likhte hoy
import { useRouter } from "next/router";

function Doc() {
    const router = useRouter();
    const { params = [] } = router.query; // it returns params array with some items
    // pre rendering er jonno initially params ta undefined thake  ..
    console.log(params);

    // lets use the params array to update our jsx to render the different element
    if (params.length === 2) {
        return (
            <h1>
                Viewing docs for feature {params[0]} and concept {params[1]}
            </h1>
        );
    } else if (params.length === 1) {
        return <h1>Viewing docs for feature {params[0]}</h1>;
    }

    return <h1>Docs Home Page</h1>; // dui er beshi likhle .. home page e niye jabo
}

export default Doc;
