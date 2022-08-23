export const InputChange = function(key: string){
    return function(target: any, propertyKey: any, descriptor: TypedPropertyDescriptor<any>){
        const proxy = new Proxy(descriptor.value, {
            apply(target, thisArg, argArray) {
                
            },
        })
    }
}