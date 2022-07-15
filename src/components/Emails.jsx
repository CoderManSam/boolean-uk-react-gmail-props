import { Email } from "./Email";

export function Emails(props) {

    const toggleStar = targetEmail => {
      const updatedEmails = emails =>
        emails.map(email =>
          email.id === targetEmail.id
            ? { ...email, starred: !email.starred }
            : email
        )
      props.setEmails(updatedEmails)
    }

    const toggleRead = targetEmail => {
      const updatedEmails = emails =>
        emails.map(email =>
          email.id === targetEmail.id ? { ...email, read: !email.read } : email
        )
      props.setEmails(updatedEmails)
    }

    return(
        <ul>
          {props.filteredEmails.map((email, index) => (
            <Email 
            email={email}
            index={index}
            toggleStar={toggleStar}
            toggleRead={toggleRead}
            />
          ))}
        </ul>
    )
}