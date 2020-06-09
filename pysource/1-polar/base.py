# %%
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv('data.csv')
df = df.assign(theta = [0, 360], id = 1)
df

# %%
from scipy.interpolate import interp1d
import math

with plt.style.context("seaborn-white"):
    fig = plt.figure(figsize=(5,5))

    rect = [0.05, 0.15, 0.95, 0.75]
    
    base_ax = fig.add_axes(rect, projection="polar")

    ax = base_ax
    ax.set_theta_zero_location("N")
    ax.set_theta_direction(-1)
    ax.set_thetagrids([0, 90, 180, 270], labels = ('2015 | 1955', '1970', '1985', '2000'))
    ax.set_rgrids([50, 60, 70, 80], labels = ('', '', '', ''))
    ax.spines['polar'].set_visible(False)
    ax.set_rlim(bottom = 40, top = 85)

    # axes = [fig.add_axes(rect, projection="polar", label="axes%d" % i, facecolor="none") 
    #                     for i in range(4)]

    # for ax in axes[1:]:
    #     ax.patch.set_visible(False)
    #     ax.grid(False)
    #     ax.xaxis.set_visible(False)
    #     base_ax.yaxis.grid(False)

    # for ax, angle in zip(axes, [0, 90, 180, 270]):
    #     ax.set_rgrids(range(1, 5), labels=('_', '_', '_', '_', '_'), angle=angle, fontsize=12)
    #     # hide outer spine (circle)
    #     ax.spines["polar"].set_visible(False)
    #     ax.set_ylim(0, 4)  
    #     ax.xaxis.grid(True, color='black', linestyle='-')
    #     ax.set_thetagrids([0, 90, 180, 270], labels = ('', '', '', ''))

    #     # apply offset transform to all x ticklabels.
    #     for label in ax.xaxis.get_majorticklabels():
    #         label.set_transform(label.get_transform() + offset)

    #     # draw a line on the y axis at each label
    #     ax.tick_params(axis='y', pad=0, left=True, length=6, 
    #         width=1, direction='inout', rotation=90)

    for curve in [[df.theta, df.expectancy]]:
        curve[0] = np.deg2rad(curve[0])
        x = np.linspace(curve[0][0], curve[0][1], 500)
        y = interp1d(curve[0], curve[1])(x)
        base_ax.plot(x, y, lw = 3)

    markers = ['o', '>']
    offsets_x = [-40, 10]
    offsets_y = [-2, -2]
    for x, y, off_x, off_y, m in zip(df.theta, df.expectancy, offsets_x, offsets_y, markers):
        x = math.radians(x)
        base_ax.scatter(x, y, marker = m, c = '#1f77b4')

        bbox = dict(boxstyle="round", fc="#add8e6")
        ax.annotate('%d yrs'%(y),
                    (x, y), xytext=(off_x, off_y), 
                    textcoords='offset points',
                    bbox=bbox)
    
    # new_axis = fig.add_axes(ax.get_position(), frameon = False)
    # new_axis.plot()
    # plt.show()
plt.suptitle('WE ARE ' + r"$\bf{" + 'LIVING' + "}$" + ' ' + r"$\bf{" + 'LONGER' + "}$" + '...', 
    y=1.05, x = 0.52, fontsize=18)
plt.title('Life expectancy at birth', fontsize=10)
plt.savefig('base.png', dpi = 150,
            bbox_inches = 'tight',
            transparent = True)

# %%
