import { ref } from 'vue'
import { useModal } from './modal'
import Logout from '@/components/modals/logout.vue'
import DefaultVerification from '@/components/modals/verification/default.vue'
import MobileSidebar from '@/components/sidebars/MobileSidebar.vue'
import CreateTask from '@/components/modals/tasks/Create.vue'
import DeleteTask from '@/components/modals/tasks/Delete.vue'
import SocialShare from '@/components/modals/core/SocialShare.vue'

type AuthTypes = 'Logout' | 'DefaultVerification'
type SidebarTypes = 'MobileSidebar'
type TaskTypes = 'CreateTask' | 'DeleteTask'
type CoreTypes = 'SocialShare'

const AuthModals = { Logout, DefaultVerification } as Record<AuthTypes, any>
const SidebarModals = { MobileSidebar } as Record<SidebarTypes, any>
const TaskModals = { CreateTask, DeleteTask } as Record<TaskTypes, any>
const CoreModals = { SocialShare } as Record<CoreTypes, any>

export const modal = useModal(ref([] as any))
const authModal = modal.register('Auth', AuthModals)
const sidebarModal = modal.register('Sidebar', SidebarModals)
const taskModal = modal.register('Task', TaskModals)
const coreModal = modal.register('Core', CoreModals)

export const useAuthModal = () => authModal
export const useSidebarModal = () => sidebarModal
export const useTaskModal = () => taskModal
export const useCoreModal = () => coreModal
