import withCondition from "../hoc/ConditionalRendering"

const UserProfile = (props: any) => {
    return (
        <div>
            <h1>Name: {props.user.name}</h1>
            <h3>Email: {props.user.email}</h3>
        </div>
    )
}

// export default UserProfile;

export const UserProfileWithCondition = withCondition(UserProfile, (props) => props.user !== null);