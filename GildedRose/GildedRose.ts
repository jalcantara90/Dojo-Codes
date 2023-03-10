import { Item } from './Item';

interface IGildedRoseItem {
  sellIn: number;
  quality: number;

  updateQuality(): Item;
}


abstract class GildedRoseCommon extends Item implements IGildedRoseItem {
  constructor({ name, quality, sellIn}: Item){
    super(name, sellIn, quality);
  }

  updateQuality(): Item {
    throw new Error('You must implement this method!');
  }
}

class AgedItem extends GildedRoseCommon {
  updateQuality(): Item {
    if (0 < this.quality && this.quality < 50) {
      this.quality = this.quality + 1;
    }
    this.sellIn = this.sellIn - 1;

    return this;
  }
}

class DefaultItem extends GildedRoseCommon {
  updateQuality(): Item {
    this.sellIn = this.sellIn - 1;

    this.quality = Math.max(0, this.quality - 1);

    if (this.sellIn <= 0) {
      this.quality = Math.max(0, this.quality - 1);
    }

    return this;
  }
}

class BackstageItem extends GildedRoseCommon {
  updateQuality(): Item {
    this.sellIn = this.sellIn - 1;
    if (this.sellIn > 10) {
      this.quality = this.quality + 1;
    }
    if (this.sellIn <= 10 && this.sellIn >= 5) {
      this.quality = this.quality + 2;
    }
    if (this.sellIn < 5) {
      this.quality = this.quality + 3;
    }
    if (this.sellIn <= 0) {
      this.quality = 0;
    }

    return this;
      
  }
}

class LegendaryItem extends GildedRoseCommon {
  updateQuality(): Item {
    return this;
  }
}

class ConjuredItem extends GildedRoseCommon {
  updateQuality(): Item {
    this.sellIn = this.sellIn - 1;

    this.quality = Math.max(0, this.quality - 2);

    if (this.sellIn <= 0) {
      this.quality = Math.max(0, this.quality - 2);
    }

    return this;
  }
}

function gildedRoseFactory(item: Item): GildedRoseCommon {
  switch (item.name) {
    case 'Aged Brie':
     return new AgedItem(item);
    case 'Backstage passes to a TAFKAL80ETC concert':
      return new BackstageItem(item);
    case 'Sulfuras, Hand of Ragnaros':
      return new LegendaryItem(item);
    case 'Conjured':
      return new ConjuredItem(item);
    default:
      return new DefaultItem(item);
  }
}



export class GildedRose {
  constructor(private items: Item[] = []) {
    this.items = items;
  }

  updateQuality() {
    return this.items.map((item) => {
      const categorizedItem = gildedRoseFactory(item);

      return categorizedItem.updateQuality();
    });
  }
}
