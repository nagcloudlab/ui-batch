
const httpEndpoints: any = {};

function registerEndpoint(constructor: any) {
    const className = constructor.name;
    const endpointPath = "/" + className.toLowerCase();
    httpEndpoints[endpointPath] = new constructor();
}

@registerEndpoint
class Families {
    private houses = ["Lannister", "Targaryen"];
    get() {
        return this.houses;
    }
    post(request: any) {
        this.houses.push(request.body);
    }
}


@registerEndpoint
class Castles {
    private castles = ["Winterfell", "Casterly Rock"];

    get() {
        return this.castles;
    }
    post(request: any) {
        this.castles.push(request.body);
    }
}


console.log(httpEndpoints["/families"].get()); // ["Lannister", "Targaryen"]
