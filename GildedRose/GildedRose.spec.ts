import { Item } from './Item';
import { GildedRose } from './GildedRose';

describe('GildedRose', () => {
  describe('when the updateQuality is called', () => {
    it('should reduce by one the quality and sellIn of each item', () => {
      const items: Item[] = [
        new Item('Coffee', 10, 10),
        new Item('Tea', 20, 5),
      ];

      const gildedRose = new GildedRose(items);
      const [coffeeItem, teaItem] = gildedRose.updateQuality();

      expect(coffeeItem.sellIn).toEqual(9);
      expect(coffeeItem.quality).toEqual(9);

      expect(teaItem.sellIn).toEqual(19);
      expect(teaItem.quality).toEqual(4);
    });

    describe('and sell by date has passed', () => {
      it('should decrease the quality by 2', () => {
        const items: Item[] = [
          new Item('Coffee', 0, 10),
          new Item('Tea', -1, 5),
        ];
        const gildedRose = new GildedRose(items);
        const [coffeeItem, teaItem] = gildedRose.updateQuality();

        expect(coffeeItem.quality).toEqual(8);
        expect(teaItem.quality).toEqual(3);
      });
    });

    describe('quality checks', () => {
      it('quality should never be negative', () => {
        const items: Item[] = [
          new Item('Coffee', -1, 1),
          new Item('Tea', 2, 0),
        ];
        const gildedRose = new GildedRose(items);
        const [coffeeItem, teaItem] = gildedRose.updateQuality();

        expect(coffeeItem.quality).toEqual(0);
        expect(teaItem.quality).toEqual(0);
      });
    });

    describe('when the item name is "Sulfuras, Hand of Ragnaros"', () => {
      it('should keep the quality and sellIn', () => {
        const items: Item[] = [new Item('Sulfuras, Hand of Ragnaros', 2, 30)];
        const gildedRose = new GildedRose(items);
        const [sulfurasHandOfRagnaros] = gildedRose.updateQuality();

        expect(sulfurasHandOfRagnaros.quality).toBe(30);
        expect(sulfurasHandOfRagnaros.sellIn).toBe(2);
      });
    });
  });

  describe('quality checks', () => {
    it('should increase the quality  by 1 when it is Aged Brie', () => {
      const items: Item[] = [
        new Item('Aged Brie', 2, 10),
        new Item('Tea', 2, 0),
      ];
      const gildedRose = new GildedRose(items);
      const [agedBrie, teaItem] = gildedRose.updateQuality();

      expect(agedBrie.quality).toEqual(11);
      expect(teaItem.quality).toEqual(0);
    });

    it('should decrease the quality by 2 when it is Conjured and sellin is not expired', () => {
      const item: Item[] = [
        new Item('Conjured', 10, 10)
      ];
      const gildedRose = new GildedRose(item);
      const [conjuredItem]= gildedRose.updateQuality();

      expect(conjuredItem.quality).toEqual(8);
      expect(conjuredItem.sellIn).toEqual(9);
    });

    it('should decrase the quality by 4 when Conjured and the sellin is expired', ()=> {
      const item: Item[] = [
        new Item('Conjured', 1, 10)
      ];
      const gildedRose = new GildedRose(item);
      const [conjuredItem]= gildedRose.updateQuality();

      expect(conjuredItem.quality).toEqual(6);
      expect(conjuredItem.sellIn).toEqual(0);
    })

    it('the quality of an item should not be more than 50', () => {
      const items: Item[] = [new Item('Aged Brie', 2, 50)];
      const gildedRose = new GildedRose(items);
      const [agedBrie] = gildedRose.updateQuality();

      expect(agedBrie.quality).toBe(50);
    });
  });

  describe('when the item name is Backstage passes', () => {
    it('and sellIn is less than 10', () => {
      const items: Item[] = [
        new Item('Backstage passes to a TAFKAL80ETC concert', 9, 10),
      ];
      const gildedRose = new GildedRose(items);
      const [backstageItem] = gildedRose.updateQuality();

      expect(backstageItem.quality).toBe(12);
    });

    it('and sellIn is less than 5', () => {
      const items: Item[] = [
        new Item('Backstage passes to a TAFKAL80ETC concert', 4, 10),
      ];
      const gildedRose = new GildedRose(items);
      const [backstageItem] = gildedRose.updateQuality();

      expect(backstageItem.quality).toBe(13);
    });

    it('and sellIn is 0', () => {
      const items: Item[] = [
        new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10),
      ];
      const gildedRose = new GildedRose(items);
      const [backstageItem] = gildedRose.updateQuality();

      expect(backstageItem.quality).toBe(0);
    });
  });
});
