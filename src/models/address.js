'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    'Address',
    {
      firstLine: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true, notNull: true },
        set(val) {
          const newVal = val || '';
          this.setDataValue('firstLine', newVal.trim());
        },
      },
      secondLine: {
        type: DataTypes.STRING,
        allowNull: true,
        set(val) {
          if (val) {
            const newVal = val || '';
            this.setDataValue('secondLine', newVal.trim());
          } else {
            this.setDataValue('secondLine', null);
          }
        },
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true, notNull: true },
        set(val) {
          const newVal = val || '';
          this.setDataValue('city', newVal.trim());
        },
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true, notNull: true },
        set(val) {
          const newVal = val || '';
          this.setDataValue('state', newVal.trim());
        },
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true, notNull: true },
        set(val) {
          const newVal = val || '';
          this.setDataValue('country', newVal.trim());
        },
      },
      postalCode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true, notNull: true },
        set(val) {
          const newVal = val || '';
          this.setDataValue('postalCode', newVal.trim());
        },
      },
      active: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
    },
    {
      underscored: true,
      tableName: 'address',
    }
  );

  Address.associate = () => {};

  return Address;
};
