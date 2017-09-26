import List from '@/components/List';
import store from '@/store';
import { mount } from 'avoriaz';

describe('List.vue', () => {
	let ListComponent;

	beforeEach(() => {
		ListComponent = mount(List, { store });
	});

	it('displays items from the list', () => {
		expect(ListComponent.text()).to.contain('sleep');
	});

	it('adds new item to list on click with avoriaz', () => {
		ListComponent.setData({
			newItem: 'brush my teeth',
		});

		const button = ListComponent.find('#add-button')[0];
		button.trigger('click');

		expect(ListComponent.text()).to.contain('brush my teeth');
		expect(ListComponent.data().tasks).to.contain('brush my teeth');
	});
});
