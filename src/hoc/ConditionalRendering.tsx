// A Higher-Order Component (HOC) that conditionally renders components based on a condition:
type ConditionFn<T> = (props: T) => boolean

const withCondition = <T extends object>(WrappedComponent: React.ComponentType<T>, condition: ConditionFn<T>) => {
    return (props: T) => {
        return condition(props) ? <WrappedComponent {...props} /> : null
    }
}

export default withCondition;