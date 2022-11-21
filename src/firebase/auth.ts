import {
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged,
	signOut,
	User
} from 'firebase/auth'
import { auth } from './init'
// eslint-disable-next-line import/named
import { useAlert, useLoading } from '~~/src/composables/core/useNotification'
import { useUser } from '@/composables/auth/user'

const { openAlert } = useAlert()
const { closeLoading } = useLoading()
const { clearUser, setUser } = useUser()

onAuthStateChanged(auth, (user) => {
	if (user) setUser(user)
	else clearUser()
})

const provider = new GoogleAuthProvider()

export const googleAuth = async () => {
	try {
		const result = await signInWithPopup(auth, provider)
		return result.user as User
	} catch (error: any) {
		closeLoading()
		openAlert({ type: 'ERROR', msg: `Oops seems something went wrong 😕 : ${error.message}` })
	}
}

export const signOutUser = async () => {
	try {
		await signOut(auth)
		useUser().clearUser()
	} catch (error:any) {
		closeLoading()
		openAlert({ type: 'ERROR', msg: `Oops seems something went wrong 😕 : ${error.message}` })
	}
}
