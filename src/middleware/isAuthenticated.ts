import { useUser } from '@/composables/auth/user'

export default function isAuthenticated(route: any) {
	if (!useUser().isLoggedIn.value) {
		return navigateTo('/auth/login')
	}
}
