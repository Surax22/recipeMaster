import { defineStore } from 'pinia';

// import { accountWrapper } from '@/data';
import { useAuthStore } from '@/stores';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useUsersStore = defineStore({
    id: 'users',
    state: () => ({
        users: {},
        user: {}
    }),
    actions: {
        async register(user) {
            await accountWrapper.post(`${baseUrl}/register`, user);
        },
        async getAll() {
            this.users = { loading: true };
            try {
                this.users = await accountWrapper.get(baseUrl);    
            } catch (error) {
                this.users = { error };
            }
        },
        async getById(id) {
            this.user = { loading: true };
            try {
                this.user = await accountWrapper.get(`${baseUrl}/${id}`);
            } catch (error) {
                this.user = { error };
            }
        },
        async update(id, params) {
            await accountWrapper.put(`${baseUrl}/${id}`, params);

            const authStore = useAuthStore();
            if (id === authStore.user.id) {
                const user = { ...authStore.user, ...params };
                localStorage.setItem('user', JSON.stringify(user));
                authStore.user = user;
            }
        },
        async delete(id) {
            this.users.find(x => x.id === id).isDeleting = true;

            await accountWrapper.delete(`${baseUrl}/${id}`);

            this.users = this.users.filter(x => x.id !== id);

            const authStore = useAuthStore();
            if (id === authStore.user.id) {
                authStore.logout();
            }
        }
    }
});
