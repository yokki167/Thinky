import React from "react"

export default function Validation(props) {
  const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  // const props = props.state
  props.emailError = ""
  props.passwordError = ""
  // {
  //   props.passwordConfirmationError
  //     ? (props.passwordConfirmationError = "")
  //     : null
  // }
  props.passwordConfirmationError = ""

  const email = props.email
  const password = props.password
  const confirmation = props.password_confirmation
    ? props.password_confirmation
    : null

  if (!email.match(regex)) {
    props.emailError = "メールアドレスが無効です"
    if (!email) {
      props.emailError = "メールアドレスを入力してください"
    }
  }
  if (!password) {
    props.passwordError = "パスワードを入力してください"
  }

  if (password && password.length < 7) {
    props.passwordError = "７文字以上のパスワードを入力してください"
  }

  if (props.password_confirmation) {
    if (password !== confirmation) {
      props.passwordConfirmationError = "パスワードが一致していません"
    }
  }

  // if (props.emailError || props.passwordError) {
  //   this.setState({ emailError, passwordError, passwordConfirmationError })
  //   return false
  // }

  // return true
}
